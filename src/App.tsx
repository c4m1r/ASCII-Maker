import { useState } from 'react';
import ASCIIPlayer from './components/ASCIIPlayer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/Card';
import { translations, Language } from './lib/translations';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  // Get current year dynamically
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear === 2025 ? '2025' : `2025-${currentYear}`;

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with Home Button and Language Selector */}
        <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
          {/* Left side - Home and GitHub buttons */}
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="https://c4m1r.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-bold text-white shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 animate-gradient-x"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite',
              }}
            >
              🏠 {t.homeButton}
            </a>
            
            <a
              href="https://github.com/c4m1r/ascii_maker"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 flex items-center gap-2"
              title={t.githubTitle}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              ⭐ {t.githubButton}
            </a>
          </div>

          {/* Language Selector - Right side */}
          <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl ${
                  language === lang.code
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-gray-400">{t.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">{t.approach}</p>
        </div>

        {/* Video and Animation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
          {/* Original Video */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-3xl">🎥</span>
                Original Video
              </CardTitle>
              <CardDescription>
                {language === 'en' ? 'Source video before ASCII conversion' : 
                 language === 'ru' ? 'Исходное видео до конвертации в ASCII' :
                 language === 'zh' ? '转换为ASCII之前的原始视频' :
                 'Video original antes de la conversión ASCII'}
                <br />
                <span className="text-xs text-gray-500">video/1.mp4</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative bg-black border border-gray-700 rounded-lg overflow-hidden" style={{ height: '420px' }}>
                <video
                  className="w-full h-full object-contain"
                  controls
                  loop
                  muted
                  playsInline
                >
                  <source src="/video/1.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </CardContent>
          </Card>
          {/* Colored ASCII */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-3xl">{t.colored.icon}</span>
                {t.colored.title}
              </CardTitle>
              <CardDescription>
                {t.colored.description}
                <br />
                <span className="text-xs text-gray-500">{t.colored.params}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ASCIIPlayer
                framesPath="colored"
                frameCount={161}
                fps={48}
                colorOverlay={false}
                showControls={true}
                autoPlay={true}
              />
            </CardContent>
          </Card>

          {/* Monochrome ASCII */}
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-3xl">{t.monochrome.icon}</span>
                {t.monochrome.title}
              </CardTitle>
              <CardDescription>
                {t.monochrome.description}
                <br />
                <span className="text-xs text-gray-500">{t.monochrome.params}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ASCIIPlayer
                framesPath="monochrome"
                frameCount={161}
                fps={48}
                colorOverlay={true}
                overlayGradient="radial-gradient(circle at center, rgba(100,200,255,0.8) 0%, rgba(50,50,150,0.5) 85%)"
                showControls={true}
                autoPlay={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>{t.technical.title}</CardTitle>
            <CardDescription>{t.technical.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-lg mb-3 text-blue-400">
                  {t.technical.conversion.title}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong>{t.technical.conversion.sourceVideo}:</strong> video/1.mp4
                  </li>
                  <li>
                    <strong>{t.technical.conversion.resolution}:</strong> 80 {t.technical.conversion.columns}
                  </li>
                  <li>
                    <strong>{t.technical.conversion.fps}:</strong> 24 {t.technical.conversion.framesPerSec}
                  </li>
                  <li>
                    <strong>{t.technical.conversion.totalFrames}:</strong> 161
                  </li>
                  <li>
                    <strong>{t.technical.conversion.duration}:</strong> ~5.4 {t.technical.conversion.seconds}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-3 text-purple-400">
                  {t.technical.technologies.title}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong>{t.technical.technologies.frontend}:</strong> Vite 6, React 19, TypeScript
                  </li>
                  <li>
                    <strong>{t.technical.technologies.styling}:</strong> Tailwind CSS
                  </li>
                  <li>
                    <strong>{t.technical.technologies.animation}:</strong> requestAnimationFrame API
                  </li>
                  <li>
                    <strong>{t.technical.technologies.conversion}:</strong> Python, OpenCV, Pillow
                  </li>
                  <li>
                    <strong>{t.technical.technologies.effects}:</strong> CSS blend modes (color-dodge)
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-bold text-lg mb-3 text-green-400">
                  {t.technical.modes.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-300 mb-2">
                      {t.colored.icon} {t.colored.title}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {t.technical.modes.coloredDesc}
                    </p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-300 mb-2">
                      {t.monochrome.icon} {t.monochrome.title}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {t.technical.modes.monochromeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How To Create Section */}
        <Card className="mb-12 border-2 border-blue-500/30">
          <CardHeader className="bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <CardTitle className="text-2xl">{t.howTo.title}</CardTitle>
            <CardDescription className="text-base">{t.howTo.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Steps */}
            <div className="space-y-8">
              {/* Step 0 - Clone from GitHub */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center font-bold text-xl">
                  0
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t.howTo.steps.step0.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step0.content}</p>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code className="text-purple-400">{t.howTo.steps.step0.code}</code>
                  </pre>
                </div>
              </div>

              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{t.howTo.steps.step1.title}</h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step1.content}</p>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code className="text-green-400">{t.howTo.steps.step1.code}</code>
                  </pre>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{t.howTo.steps.step2.title}</h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step2.content}</p>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code className="text-yellow-400">{t.howTo.steps.step2.code}</code>
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-pink-400">{t.howTo.steps.step3.title}</h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step3.content}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t.howTo.steps.step3.colored}</p>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-green-400 text-sm">python convert_video_opencv.py video/1.mp4 -m colored -t 15 -c 80 -f 24</code>
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t.howTo.steps.step3.monochrome}</p>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-green-400 text-sm">python convert_video_opencv.py video/1.mp4 -m monochrome_browser -t 15 -c 80 -f 24</code>
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t.howTo.steps.step3.blackwhite}</p>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-green-400 text-sm">python convert_video_opencv.py video/1.mp4 -m transparent_browser -t 35 -c 80 -f 24</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-green-400">{t.howTo.steps.step4.title}</h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step4.content}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t.howTo.steps.step4.windows}</p>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-cyan-400 text-sm">
{`Copy-Item "ascii_colored_*/txt_frames/*.txt" -Destination "public/frames/colored/"
Copy-Item "ascii_monochrome_browser_*/txt_frames/*.txt" -Destination "public/frames/monochrome/"
Copy-Item "ascii_transparent_browser_*/txt_frames/*.txt" -Destination "public/frames/transparent/"`}
                        </code>
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t.howTo.steps.step4.linux}</p>
                      <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-cyan-400 text-sm">
{`cp ascii_colored_*/txt_frames/*.txt public/frames/colored/
cp ascii_monochrome_browser_*/txt_frames/*.txt public/frames/monochrome/
cp ascii_transparent_browser_*/txt_frames/*.txt public/frames/transparent/`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-orange-400">{t.howTo.steps.step5.title}</h3>
                  <p className="text-gray-300 mb-3">{t.howTo.steps.step5.content}</p>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-3">
                    <code className="text-green-400">{t.howTo.steps.step5.code}</code>
                  </pre>
                  <p className="text-gray-400">{t.howTo.steps.step5.open} <a href="http://localhost:3000" className="text-blue-400 hover:text-blue-300 underline">http://localhost:3000</a></p>
                </div>
              </div>
            </div>

            {/* Parameters & Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-700">
              {/* Parameters */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-yellow-400">{t.howTo.parameters.title}</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>
                    <strong className="text-yellow-300">-m, --{t.howTo.parameters.mode}:</strong> {t.howTo.parameters.modeDesc}
                  </li>
                  <li>
                    <strong className="text-yellow-300">-t, --{t.howTo.parameters.threshold}:</strong> {t.howTo.parameters.thresholdDesc}
                  </li>
                  <li>
                    <strong className="text-yellow-300">-c, --{t.howTo.parameters.columns}:</strong> {t.howTo.parameters.columnsDesc}
                  </li>
                  <li>
                    <strong className="text-yellow-300">-f, --{t.howTo.parameters.fps}:</strong> {t.howTo.parameters.fpsDesc}
                  </li>
                </ul>
              </div>

              {/* Tips */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">{t.howTo.tips.title}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💡</span>
                    {t.howTo.tips.tip1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💡</span>
                    {t.howTo.tips.tip2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💡</span>
                    {t.howTo.tips.tip3}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">💡</span>
                    {t.howTo.tips.tip4}
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            {language === 'en' ? 'Inspired by' : language === 'ru' ? 'Вдохновлено' : language === 'zh' ? '灵感来自' : 'Inspirado en'}{" "}
            <a
              href="https://ghostty.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ghostty terminal
            </a>
            {" · "}
            <a
              href="https://pierce.dev/notes/making-the-ghostty-animation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {language === 'en' ? 'Animation approach' : language === 'ru' ? 'Подход к анимации' : language === 'zh' ? '动画方法' : 'Enfoque de animación'}
            </a>
          </p>
          <p className="mt-2">
            ASCII Maker by{' '}
            <a
              href="https://c4m1r.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              C4m1r
            </a>
            {' '}© {yearRange}
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;

