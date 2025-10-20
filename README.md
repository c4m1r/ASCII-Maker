# ASCII Maker

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://github.com/c4m1r/ascii_maker)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> 🌐 **[русский](./README_RU.md)** | **[中文](./README_CH.md)** | **[Español](./README_ES.md)**

Convert videos into ASCII art animations with multiple visual modes. High-performance web application built with Vite + React.

**Inspired by**: [Ghostty terminal](https://ghostty.org) & [Pierce's animation approach](https://pierce.dev/notes/making-the-ghostty-animation/)

**Live Demo**: [https://c4m1r.github.io/ASCII-Maker/](https://c4m1r.github.io/ASCII-Maker/)

## ✨ Features

- 🎥 **Original Video Display** - Side-by-side comparison
- 🎨 **Colored ASCII** - Full RGB color conversion
- ⚫ **Monochrome ASCII** - Blue overlay effect
- 🚀 **High Performance** - Vite + React 19, optimized memory usage
- 🌐 **Multilingual** - English, Russian, Chinese, Spanish
- 💾 **Smart Caching** - Efficient frame loading
- 📱 **Responsive Design** - Works on all devices
- ♿ **Accessibility** - Supports `prefers-reduced-motion`

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/c4m1r/ascii_maker.git
cd ascii_maker
npm install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run preview
```

## 🎬 Create Your Own ASCII Animation

### 1. Install Python Dependencies

```bash
pip install opencv-python Pillow
```

### 2. Place Your Video

```bash
video/your-video.mp4
```

### 3. Convert Video

```bash
# Colored ASCII
python convert_video_opencv.py video/your-video.mp4 -m colored -t 15 -c 80 -f 24

# Monochrome ASCII
python convert_video_opencv.py video/your-video.mp4 -m monochrome_browser -t 15 -c 80 -f 24
```

### 4. Copy Frames

**Windows:**
```powershell
Copy-Item "ascii_colored_*/txt_frames/*.txt" -Destination "public/frames/colored/" -Force
Copy-Item "ascii_monochrome_browser_*/txt_frames/*.txt" -Destination "public/frames/monochrome/" -Force
```

**Linux/Mac:**
```bash
cp ascii_colored_*/txt_frames/*.txt public/frames/colored/
cp ascii_monochrome_browser_*/txt_frames/*.txt public/frames/monochrome/
```

### 5. Run Dev Server

```bash
npm run dev
```

## 📊 Technologies

- **Frontend**: Vite 6, React 19, TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animation**: requestAnimationFrame API
- **Conversion**: Python, OpenCV, Pillow
- **Effects**: CSS blend modes (color-dodge)
- **Deployment**: GitHub Pages

## 🔧 Conversion Parameters

| Parameter | Description | Values |
|-----------|-------------|--------|
| `-m, --mode` | Conversion mode | `colored`, `monochrome_browser` |
| `-t, --threshold` | Brightness threshold | 15-35 (higher = more transparency) |
| `-c, --columns` | Width in characters | 80-120 (more = more detail) |
| `-f, --fps` | Frames per second | 24-48 (higher = smoother) |

## 💡 Tips

- Use short videos (3-10 sec) for best performance
- Higher threshold (30-40) for more transparency
- Increase width (100-120) for more detail
- Lower FPS (12-18) for smaller file sizes

## 📈 Performance

### Memory Usage
- **2 animations**: ~500 МB
- **Optimization**: Pre-allocated arrays, batch loading, cleanup on unmount

### Loading Time
- **First render**: ~1-2 seconds
- **Bundle size**: ~95 KB (gzipped)

## 🌐 Deployment

### GitHub Pages (Automatic)

Push to `main` branch and GitHub Actions will automatically deploy:

```bash
git add .
git commit -m "Update ASCII Maker"
git push
```

Site will be live at: `https://c4m1r.github.io/ASCII-Maker/`

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🙏 Credits

- [Ghostty terminal](https://ghostty.org) - Animation approach inspiration
- [Pierce Bartine](https://pierce.dev/notes/making-the-ghostty-animation/) - Technical explanation
- [Initial development and implementation](https://c4m1r.github.io), [Project page](https://github.com/c4m1r/ascii-maker)
