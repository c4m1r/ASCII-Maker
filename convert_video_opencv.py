#!/usr/bin/env python3
"""
ASCII Video Converter using OpenCV
Converts video to ASCII art frames with different modes
Based on developedbyed/react-gradient-glow approach
"""

import os
import sys
import argparse
from pathlib import Path
from datetime import datetime
import cv2
from PIL import Image
import numpy as np

# ASCII character set (from darkest to brightest)
ASCII_CHARS = " .'\"`^,:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"

def rgb_to_luminance(r, g, b):
    """Convert RGB to luminance value"""
    return 0.299 * r + 0.587 * g + 0.114 * b

def get_ascii_char(luminance, char_set):
    """Map luminance value to ASCII character"""
    index = int((luminance / 255.0) * (len(char_set) - 1))
    return char_set[min(index, len(char_set) - 1)]

def frame_to_ascii(frame, mode, threshold, columns):
    """Convert video frame to ASCII art
    
    Modes:
    - colored: Full RGB color with HTML spans
    - monochrome_browser: Grayscale with spans for browser (fixed width)
    - transparent_browser: High threshold with spans for browser (fixed width)
    - monochrome_full: Pure ASCII for terminal/console
    - transparent_full: Pure ASCII for terminal with high threshold
    """
    # Resize frame
    height, width = frame.shape[:2]
    FONT_RATIO = 0.44
    new_height = int(columns * FONT_RATIO)
    
    resized = cv2.resize(frame, (columns, new_height), interpolation=cv2.INTER_LANCZOS4)
    
    ascii_lines = []
    
    # Browser modes need spans for each character (like colored mode)
    browser_mode = mode in ['colored', 'monochrome_browser', 'transparent_browser']
    
    for y in range(resized.shape[0]):
        line = []
        for x in range(resized.shape[1]):
            # OpenCV uses BGR format
            b, g, r = resized[y, x]
            
            luminance = rgb_to_luminance(r, g, b)
            
            # Apply threshold
            if luminance < threshold:
                char = ' '
            else:
                char = get_ascii_char(luminance, ASCII_CHARS)
            
            # Format based on mode
            if mode == 'colored':
                # Full RGB color
                formatted_char = f'<span style="color:rgb({r},{g},{b})">{char}</span>'
                line.append(formatted_char)
            elif mode in ['monochrome_browser', 'transparent_browser']:
                # Grayscale with span to preserve structure (like colored)
                # This is the key: wrap EVERY character in span, including spaces
                formatted_char = f'<span style="color:#ffffff">{char}</span>'
                line.append(formatted_char)
            else:
                # Full modes - pure text for terminal
                line.append(char)
        
        # Join line
        line_str = ''.join(line)
        
        # For pure text modes (terminal), ensure fixed width
        if not browser_mode:
            line_str = line_str.ljust(columns)
        
        ascii_lines.append(line_str)
    
    return '\n'.join(ascii_lines)

def convert_video_to_ascii(video_path, mode, threshold, columns, fps, output_dir):
    """Main conversion function"""
    
    print("=" * 60)
    print("ASCII Video Converter (OpenCV)")
    print("=" * 60)
    print(f"Input video: {video_path}")
    print(f"Mode: {mode}")
    print(f"Luminance threshold: {threshold}")
    print(f"Output columns: {columns}")
    print(f"Target FPS: {fps}")
    print(f"Output directory: {output_dir}")
    print("=" * 60)
    
    # Open video
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Cannot open video file: {video_path}")
        return False
    
    # Get video properties
    video_fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / video_fps
    
    print(f"\nVideo info:")
    print(f"  Original FPS: {video_fps:.2f}")
    print(f"  Duration: {duration:.2f}s")
    print(f"  Total frames: {total_frames}")
    
    # Calculate frame skip
    frame_skip = max(1, int(video_fps / fps))
    output_frame_count = total_frames // frame_skip
    
    print(f"  Output frames: {output_frame_count}")
    print(f"  Frame skip: {frame_skip}")
    
    # Create output directory
    txt_dir = Path(output_dir) / 'txt_frames'
    txt_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"\nConverting to ASCII...")
    
    frame_count = 0
    output_count = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Skip frames to match target FPS
        if frame_count % frame_skip == 0:
            output_count += 1
            
            if output_count % 10 == 0 or output_count == 1:
                percent = int((frame_count / total_frames) * 100)
                print(f"  Processing frame {output_count}/{output_frame_count} ({percent}%)...")
            
            # Convert to ASCII
            ascii_art = frame_to_ascii(frame, mode, threshold, columns)
            
            # Save to file
            output_file = txt_dir / f'frame_{output_count:04d}.txt'
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(ascii_art)
        
        frame_count += 1
    
    cap.release()
    
    # Create summary
    FONT_RATIO = 0.44
    rows = int(columns * FONT_RATIO)
    
    summary = f"""ASCII Animation Frames
=====================

Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Source video: {video_path}
Mode: {mode}
Luminance threshold: {threshold}
Output columns: {columns}
Output rows: {rows}
Target FPS: {fps}
Total frames: {output_count}

Frames are located in: {txt_dir}

To use in Next.js project:
1. Copy frames to public/frames/{mode}/
   mkdir public\\frames\\{mode}
   copy {txt_dir}\\*.txt public\\frames\\{mode}\\

2. Use ASCIIAnimation component with framesPath="{mode}"
"""
    
    readme_path = Path(output_dir) / 'README.txt'
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(summary)
    
    print("\n" + "=" * 60)
    print("Conversion complete!")
    print("=" * 60)
    print(f"Frames saved to: {txt_dir}")
    print(f"Total frames generated: {output_count}")
    print("\nNext steps:")
    print(f"  mkdir public\\frames\\{mode}")
    print(f"  copy {txt_dir}\\*.txt public\\frames\\{mode}\\")
    print("=" * 60)
    
    return True

def main():
    parser = argparse.ArgumentParser(
        description='Convert video to ASCII art frames using OpenCV',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Modes:
  colored              - Full RGB color with HTML spans (for browser)
  monochrome_browser   - Grayscale with HTML spans (for browser)
  transparent_browser  - High threshold with HTML spans (for browser)
  monochrome_full      - Pure ASCII text (for terminal/console)
  transparent_full     - Pure ASCII with high threshold (for terminal/console)

Browser modes wrap each character in <span> tags to preserve structure.
Full modes generate pure ASCII text suitable for terminal display.
        """
    )
    parser.add_argument('video', help='Input video file')
    parser.add_argument('-m', '--mode', 
                        choices=['colored', 'monochrome_browser', 'transparent_browser', 
                                'monochrome_full', 'transparent_full'],
                        default='colored', 
                        help='Conversion mode (see modes below)')
    parser.add_argument('-t', '--threshold', type=int, default=15,
                        help='Luminance threshold (default: 15)')
    parser.add_argument('-c', '--columns', type=int, default=100,
                        help='Output columns (default: 100)')
    parser.add_argument('-f', '--fps', type=int, default=24,
                        help='Output FPS (default: 24)')
    parser.add_argument('-o', '--output', help='Output directory')
    
    args = parser.parse_args()
    
    # Check if video exists
    if not os.path.exists(args.video):
        print(f"Error: Video file not found: {args.video}")
        return 1
    
    # Set output directory
    if args.output:
        output_dir = args.output
    else:
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        output_dir = f'ascii_frames_{args.mode}_{timestamp}'
    
    # Convert video
    success = convert_video_to_ascii(
        args.video,
        args.mode,
        args.threshold,
        args.columns,
        args.fps,
        output_dir
    )
    
    return 0 if success else 1

if __name__ == '__main__':
    sys.exit(main())

