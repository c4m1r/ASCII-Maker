# ASCII Maker

[![Versión](https://img.shields.io/badge/versión-1.0.1-blue.svg)](https://github.com/c4m1r/ascii_maker)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green.svg)](LICENSE)

> 🌐 **[English](./README.md)** | **[русский](./README_RU.md)** | **[中文](./README_CH.md)**

Convierte videos en animaciones de arte ASCII con múltiples modos visuales. Aplicación web de alto rendimiento construida con Vite + React.

**Inspirado en**: [Ghostty terminal](https://ghostty.org) y [el enfoque de animación de Pierce](https://pierce.dev/notes/making-the-ghostty-animation/)

**Demo en Vivo**: [https://c4m1r.github.io/ascii_maker/](https://c4m1r.github.io/ascii_maker/)

## ✨ Características

- 🎥 **Visualización del Video Original** - Comparación lado a lado
- 🎨 **ASCII a Color** - Conversión de color RGB completo
- ⚫ **ASCII Monocromático** - Efecto de superposición azul
- 🚀 **Alto Rendimiento** - Vite + React 19, uso de memoria optimizado
- 🌐 **Multilingüe** - Inglés, Ruso, Chino, Español
- 💾 **Caché Inteligente** - Carga eficiente de fotogramas
- 📱 **Diseño Responsivo** - Funciona en todos los dispositivos
- ♿ **Accesibilidad** - Soporta `prefers-reduced-motion`

## 🚀 Inicio Rápido

### Instalación

```bash
git clone https://github.com/c4m1r/ascii_maker.git
cd ascii_maker
npm install
```

### Desarrollo

```bash
npm run dev
# Abre http://localhost:3000
```

### Compilación de Producción

```bash
npm run build
npm run preview
```

## 🎬 Crea Tu Propia Animación ASCII

### 1. Instala Dependencias de Python

```bash
pip install opencv-python Pillow
```

### 2. Coloca Tu Video

```bash
video/your-video.mp4
```

### 3. Convierte el Video

```bash
# ASCII a Color
python convert_video_opencv.py video/your-video.mp4 -m colored -t 15 -c 80 -f 24

# ASCII Monocromático
python convert_video_opencv.py video/your-video.mp4 -m monochrome_browser -t 15 -c 80 -f 24
```

### 4. Copia los Fotogramas

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

### 5. Ejecuta el Servidor de Desarrollo

```bash
npm run dev
```

## 📊 Tecnologías

- **Frontend**: Vite 6, React 19, TypeScript 5
- **Estilos**: Tailwind CSS 3
- **Animación**: requestAnimationFrame API
- **Conversión**: Python, OpenCV, Pillow
- **Efectos**: Modos de mezcla CSS (color-dodge)
- **Despliegue**: GitHub Pages

## 🔧 Parámetros de Conversión

| Parámetro | Descripción | Valores |
|-----------|-------------|---------|
| `-m, --mode` | Modo de conversión | `colored`, `monochrome_browser` |
| `-t, --threshold` | Umbral de brillo | 15-35 (mayor = más transparencia) |
| `-c, --columns` | Ancho en caracteres | 80-120 (más = más detalle) |
| `-f, --fps` | Fotogramas por segundo | 24-48 (mayor = más suave) |

## 💡 Consejos

- Usa videos cortos (3-10 seg) para un mejor rendimiento
- Mayor umbral (30-40) para más transparencia
- Aumenta el ancho (100-120) para más detalle
- Reduce los FPS (12-18) para archivos más pequeños

## 📈 Rendimiento

### Uso de Memoria
- **2 animaciones**: ~500 MB
- **Optimización**: Arrays preasignados, carga por lotes, limpieza al desmontar

### Tiempo de Carga
- **Primera renderización**: ~1-2 segundos
- **Tamaño del bundle**: ~95 KB (gzipped)

## 🌐 Despliegue

### GitHub Pages (Automático)

Push a la rama `main` y GitHub Actions desplegará automáticamente:

```bash
git add .
git commit -m "Update ASCII Maker"
git push
```

El sitio estará en vivo en: `https://c4m1r.github.io/ascii_maker/`

## 🤝 Contribuciones

¡Las pull requests son bienvenidas! Para cambios importantes, abre primero un issue.

## 📄 Licencia

Licencia MIT - ver [LICENSE](LICENSE) para detalles

## 🙏 Créditos

- [Ghostty terminal](https://ghostty.org) - Inspiración del enfoque de animación
- [Pierce Bartine](https://pierce.dev/notes/making-the-ghostty-animation/) - Explicación técnica

## 👤 Autor

**C4m1r**
- Website: [https://c4m1r.github.io](https://c4m1r.github.io)
- GitHub: [@c4m1r](https://github.com/c4m1r)
- Repository: [ascii_maker](https://github.com/c4m1r/ascii_maker)

---

**ASCII Maker by C4m1r © 2025**

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!

