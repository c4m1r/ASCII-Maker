# 🗺️ ASCII Maker Roadmap

This document outlines the planned features and improvements for ASCII Maker. Items are listed in priority order and subject to change based on community feedback and project needs.

---

## 🎯 Current Focus

**✅ Phase 0: Core Foundation (Completed)**
- [x] Video to ASCII conversion (colored and monochrome modes)
- [x] Web-based player with frame animation
- [x] GitHub Pages deployment
- [x] Multi-language support (EN, RU, ZH, ES)
- [x] Basic documentation

---

## 📋 Planned Features

### 🔤 Phase 1: Custom Character Sets
**Status:** Planned

Support for custom character sets to enhance ASCII art generation:
- [ ] Alphabet-only character sets (A-Z, a-z)
- [ ] Numeric character sets (0-9)
- [ ] Custom user-defined character sets
- [ ] Word-based sets for creative text art
- [ ] Preset character set templates
- [ ] Character set preview and testing

**Benefits:**
- More creative control over ASCII output
- Better optimization for specific use cases
- Unique artistic styles

---

### ⚙️ Phase 2: Advanced Settings
**Status:** Planned

Additional configuration options for fine-tuning conversions:
- [ ] Contrast adjustment controls
- [ ] Brightness and gamma correction
- [ ] Custom color palettes
- [ ] Frame rate customization in UI
- [ ] Resolution scaling options
- [ ] Export settings (file format, quality)
- [ ] Preset configurations (save/load settings)

**Benefits:**
- Professional-grade control
- Better results for different video types
- User preference saving

---

### 🖼️ Phase 3: Image Conversion Support
**Status:** Planned

Expand beyond video to support static image conversion:
- [ ] Single image to ASCII conversion
- [ ] Support for common formats (PNG, JPG, GIF, WebP)
- [ ] Batch image processing
- [ ] Image comparison view (original vs ASCII)
- [ ] Drag-and-drop image upload
- [ ] Image optimization before conversion

**Benefits:**
- Broader use cases
- Easier testing and experimentation
- Profile pictures and avatars in ASCII

---

### 🌐 Phase 4: Interactive Browser-Based Converter
**Status:** Planned

Transform ASCII Maker into a fully interactive web application:
- [ ] In-browser video upload and conversion
- [ ] Real-time preview during conversion
- [ ] Client-side processing (no server upload needed)
- [ ] WebWorkers for parallel processing
- [ ] Progress tracking and cancellation
- [ ] Mobile-responsive design
- [ ] Share converted animations via link

**Benefits:**
- No Python installation required
- Instant access for all users
- Privacy (all processing client-side)
- Easy sharing and collaboration

**Technical Challenges:**
- Large file handling in browser
- Performance optimization
- Memory management

---

### 💾 Phase 5: Export to Image Formats
**Status:** Planned

Save ASCII art as image files:
- [ ] Convert `.txt` frames to `.jpg` format
- [ ] Support for `.png` (with transparency)
- [ ] Batch export all frames
- [ ] Video export (ASCII frames to MP4/GIF)
- [ ] Custom background colors
- [ ] Font and size customization
- [ ] Watermark support

**Benefits:**
- Easy sharing on social media
- Use in presentations and documents
- Print-ready outputs

---

### 🦀 Phase 6: Rust + WebAssembly Rewrite
**Status:** Research Phase

Complete rewrite for maximum performance:
- [ ] Core conversion engine in Rust
- [ ] Compile to WebAssembly (WASM)
- [ ] Benchmarking against Python implementation
- [ ] Maintain Python CLI for compatibility
- [ ] Browser integration with WASM
- [ ] Multi-threaded processing
- [ ] Optimize memory usage

**Benefits:**
- 10-100x faster conversion speeds
- Better memory efficiency
- Native-like performance in browser
- Cross-platform consistency

**Technical Requirements:**
- Rust development setup
- WASM toolchain
- Performance profiling
- Backward compatibility testing

---

## 🔮 Future Ideas

These are experimental ideas under consideration:

- **Real-time webcam to ASCII** - Live video feed conversion
- **ASCII video codec** - Compressed format for ASCII animations
- **3D ASCII art** - Depth-based character selection
- **AI-powered optimization** - ML model for better character mapping
- **ASCII art editor** - Manual frame editing and touch-ups
- **Animation effects** - Transitions, filters, overlays
- **Community gallery** - Share creations with others
- **API access** - Programmatic conversion service
- **Plugin system** - Extensible architecture for custom converters

---

## 🤝 Contributing

Interested in working on any of these features? Check out our [CONTRIBUTING.md](CONTRIBUTING.md) guide!

We welcome:
- Feature implementations
- Bug fixes
- Documentation improvements
- Performance optimizations
- New ideas and suggestions

---

## 📊 Progress Tracking

| Phase | Feature | Status | Priority |
|-------|---------|--------|----------|
| 0 | Core Foundation | ✅ Complete | - |
| 1 | Custom Character Sets | 📋 Planned | High |
| 2 | Advanced Settings | 📋 Planned | Medium |
| 3 | Image Conversion | 📋 Planned | Medium |
| 4 | Interactive Converter | 📋 Planned | High |
| 5 | Export to Images | 📋 Planned | Low |
| 6 | Rust + WASM Rewrite | 🔬 Research | Long-term |

---

## 💬 Feedback

Have suggestions for the roadmap? 

- 🐛 [Open an Issue](https://github.com/c4m1r/ASCII-Maker/issues)
- 💡 [Start a Discussion](https://github.com/c4m1r/ASCII-Maker/discussions)
- 🌟 Star the project if you find it useful!

---

**Last Updated:** October 2025  
**Version:** 1.0

