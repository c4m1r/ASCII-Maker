# ASCII Maker

[![版本](https://img.shields.io/badge/版本-1.0.1-blue.svg)](https://github.com/c4m1r/ascii_maker)
[![许可](https://img.shields.io/badge/许可-MIT-green.svg)](LICENSE)

> 🌐 **[English](./README.md)** | **[русский](./README_RU.md)** | **[Español](./README_ES.md)**

将视频转换为具有多种视觉模式的ASCII艺术动画。使用 Vite + React 构建的高性能网络应用程序。

**灵感来自**: [Ghostty terminal](https://ghostty.org) 和 [Pierce的动画方法](https://pierce.dev/notes/making-the-ghostty-animation/)

**在线演示**: [https://c4m1r.github.io/ASCII-Maker/](https://c4m1r.github.io/ASCII-Maker/)

## ✨ 功能

- 🎥 **原始视频显示** - 并排比较
- 🎨 **彩色ASCII** - 完整的RGB颜色转换
- ⚫ **单色ASCII** - 蓝色叠加效果
- 🚀 **高性能** - Vite + React 19，优化的内存使用
- 🌐 **多语言** - 英语、俄语、中文、西班牙语
- 💾 **智能缓存** - 高效的帧加载
- 📱 **响应式设计** - 适用于所有设备
- ♿ **无障碍性** - 支持 `prefers-reduced-motion`

## 🚀 快速开始

### 安装

```bash
git clone https://github.com/c4m1r/ascii_maker.git
cd ascii_maker
npm install
```

### 开发

```bash
npm run dev
# 打开 http://localhost:3000
```

### 生产构建

```bash
npm run build
npm run preview
```

## 🎬 创建你自己的ASCII动画

### 1. 安装Python依赖

```bash
pip install opencv-python Pillow
```

### 2. 放置你的视频

```bash
video/your-video.mp4
```

### 3. 转换视频

```bash
# 彩色ASCII
python convert_video_opencv.py video/your-video.mp4 -m colored -t 15 -c 80 -f 24

# 单色ASCII
python convert_video_opencv.py video/your-video.mp4 -m monochrome_browser -t 15 -c 80 -f 24
```

### 4. 复制帧

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

### 5. 运行开发服务器

```bash
npm run dev
```

## 📊 技术栈

- **前端**: Vite 6, React 19, TypeScript 5
- **样式**: Tailwind CSS 3
- **动画**: requestAnimationFrame API
- **转换**: Python, OpenCV, Pillow
- **效果**: CSS混合模式 (color-dodge)
- **部署**: GitHub Pages

## 🔧 转换参数

| 参数 | 描述 | 值 |
|------|------|---|
| `-m, --mode` | 转换模式 | `colored`, `monochrome_browser` |
| `-t, --threshold` | 亮度阈值 | 15-35 (越高 = 越透明) |
| `-c, --columns` | 字符宽度 | 80-120 (越多 = 越详细) |
| `-f, --fps` | 每秒帧数 | 24-48 (越高 = 越流畅) |

## 💡 提示

- 使用短视频（3-10秒）以获得最佳性能
- 更高的阈值（30-40）以获得更多透明度
- 增加宽度（100-120）以获得更多细节
- 降低FPS（12-18）以减小文件大小

## 📈 性能

### 内存使用
- **2个动画**: ~500 MB
- **优化**: 预分配数组、批量加载、卸载时清理

### 加载时间
- **首次渲染**: ~1-2秒
- **打包大小**: ~95 KB (gzipped)

## 🌐 部署

### GitHub Pages (自动)

推送到 `main` 分支，GitHub Actions 将自动部署：

```bash
git add .
git commit -m "Update ASCII Maker"
git push
```

网站将在以下地址上线: `https://c4m1r.github.io/ASCII-Maker/`

## 🤝 贡献

欢迎提交拉取请求！对于重大更改，请先打开issue。

## 📄 许可证

MIT许可证 - 详见 [LICENSE](LICENSE)

## 🙏 致谢

- [Ghostty terminal](https://ghostty.org) - 动画方法灵感
- [Pierce Bartine](https://pierce.dev/notes/making-the-ghostty-animation/) - 技术说明

## 👤 作者

**C4m1r**
- Website: [https://c4m1r.github.io](https://c4m1r.github.io)
- GitHub: [@c4m1r](https://github.com/c4m1r)
- [初步开发和实现](https://c4m1r.github.io)、[项目页面](https://github.com/c4m1r/ascii-maker)
