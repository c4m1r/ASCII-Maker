import { useState, useEffect, useRef, useCallback, memo } from 'react';

/**
 * Simplified ASCII Animation Player - v4.1
 * Fast and reliable frame loading
 */

interface ASCIIPlayerProps {
  framesPath: string;
  frameCount?: number;
  className?: string;
  fps?: number;
  colorOverlay?: boolean;
  overlayGradient?: string;
  showControls?: boolean;
  autoPlay?: boolean;
}

function ASCIIPlayer({
  framesPath,
  frameCount = 161,
  className = '',
  fps = 24,
  colorOverlay = false,
  overlayGradient = 'radial-gradient(circle at center, rgba(143,145,3,1) 0%, rgba(64,64,64,1) 85%)',
  showControls = true,
  autoPlay = true,
}: ASCIIPlayerProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);

  // Store all frames in ref for fast access
  const framesRef = useRef<string[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load ALL frames at once with progress
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadAllFrames = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setLoadProgress(0);

        const frames: string[] = new Array(frameCount); // Pre-allocate array
        const batchSize = 30; // Increased batch size for faster loading
        
        for (let i = 0; i < frameCount; i += batchSize) {
          if (!isMounted) break;
          
          const batchPromises = [];
          for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
            const filename = `frame_${String(j + 1).padStart(4, '0')}.txt`;
            batchPromises.push(
              fetch(`/frames/${framesPath}/${filename}`, { signal: controller.signal })
                .then(res => res.ok ? res.text() : '')
                .catch(() => '')
            );
          }
          
          const batchFrames = await Promise.all(batchPromises);
          // Direct assignment instead of push
          for (let k = 0; k < batchFrames.length; k++) {
            frames[i + k] = batchFrames[k];
          }
          
          if (isMounted) {
            setLoadProgress(Math.round(((i + batchFrames.length) / frameCount) * 100));
          }
        }

        if (isMounted) {
          framesRef.current = frames;
          setIsLoading(false);
          
          // Auto-start after loading
          if (autoPlay) {
            setTimeout(() => setIsPlaying(true), 100);
          }
        }
      } catch (err) {
        if (isMounted && !controller.signal.aborted) {
          setError('Failed to load frames');
          setIsLoading(false);
        }
      }
    };

    loadAllFrames();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [framesPath, frameCount, autoPlay]);

  // Optimized animation loop - each instance independent
  useEffect(() => {
    if (!isPlaying || framesRef.current.length === 0) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    const frameInterval = 1000 / fps;
    lastTimeRef.current = performance.now();

    const animate = (time: number) => {
      if (!isPlaying) {
        animationRef.current = null;
        return;
      }

      const elapsed = time - lastTimeRef.current;
      if (elapsed >= frameInterval) {
        setCurrentFrame(prev => (prev + 1) % framesRef.current.length);
        lastTimeRef.current = time;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isPlaying, fps]);

  // Pause when window loses focus and cleanup frames
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isPlaying) setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  // Cleanup frames on unmount to free memory
  useEffect(() => {
    return () => {
      framesRef.current = [];
    };
  }, []);

  // Control functions
  const handleTogglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentFrame(0);
    setIsPlaying(true);
  }, []);

  const handleNextFrame = useCallback(() => {
    setIsPlaying(false);
    setCurrentFrame(prev => (prev + 1) % framesRef.current.length);
  }, []);

  const handlePrevFrame = useCallback(() => {
    setIsPlaying(false);
    setCurrentFrame(prev => (prev === 0 ? framesRef.current.length - 1 : prev - 1));
  }, []);

  if (isLoading) {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="relative ascii-container bg-black border border-gray-700 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse text-lg mb-3 text-white">Loading frames...</div>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <div className="text-sm text-gray-400 font-mono">
              {loadProgress}% - {Math.round(loadProgress * frameCount / 100)}/{frameCount}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex flex-col ${className}`}>
        <div className="relative ascii-container bg-black border border-gray-700 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center text-red-500">
            <div className="text-lg font-bold mb-2">⚠️ Error loading frames</div>
            <div className="text-sm">{error}</div>
            <div className="text-xs text-gray-500 mt-2">Path: /frames/{framesPath}/</div>
          </div>
        </div>
      </div>
    );
  }

  const currentFrameContent = framesRef.current[currentFrame] || '';

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        ref={containerRef}
        className="relative ascii-container bg-black border border-gray-700 rounded-t-lg p-4"
      >
        <div
          className="ascii-content"
          dangerouslySetInnerHTML={{ __html: currentFrameContent }}
        />

        {colorOverlay && (
          <div
            className="absolute inset-0 pointer-events-none rounded-t-lg"
            style={{
              background: overlayGradient,
              mixBlendMode: 'color-dodge',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {showControls && (
        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-b-lg border border-t-0 border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={handleTogglePlay}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded transition-colors font-semibold text-sm"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleRestart}
              className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded transition-colors font-semibold text-sm"
              aria-label="Restart"
            >
              ⟲
            </button>
            <button
              onClick={handlePrevFrame}
              className="px-2 py-1.5 bg-gray-700 hover:bg-gray-600 rounded transition-colors font-semibold text-sm"
              aria-label="Previous frame"
            >
              ⏮
            </button>
            <button
              onClick={handleNextFrame}
              className="px-2 py-1.5 bg-gray-700 hover:bg-gray-600 rounded transition-colors font-semibold text-sm"
              aria-label="Next frame"
            >
              ⏭
            </button>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            {currentFrame + 1}/{frameCount}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ASCIIPlayer);
