# ASCII Maker

[![Версия](https://img.shields.io/badge/версия-1.0.1-blue.svg)](https://github.com/c4m1r/ascii_maker)
[![Лицензия](https://img.shields.io/badge/лицензия-MIT-green.svg)](LICENSE)

> 🌐 **[English](./README.md)** | **[中文](./README_CH.md)** | **[Español](./README_ES.md)**

Конвертируйте видео в ASCII-арт анимацию с несколькими визуальными режимами. Высокопроизводительное веб-приложение на Vite + React.

**Вдохновлено**: [Ghostty terminal](https://ghostty.org) и [подходом Pierce к анимации](https://pierce.dev/notes/making-the-ghostty-animation/)

**Живое Демо**: [https://c4m1r.github.io/ascii_maker/](https://c4m1r.github.io/ascii_maker/)

## ✨ Возможности

- 🎥 **Оригинальное Видео** - Сравнение рядом
- 🎨 **Цветная ASCII** - Полноцветная RGB конвертация
- ⚫ **Монохромная ASCII** - С синим оверлеем
- 🚀 **Высокая Производительность** - Vite + React 19, оптимизированная память
- 🌐 **Мультиязычность** - Английский, Русский, Китайский, Испанский
- 💾 **Умное Кэширование** - Эффективная загрузка кадров
- 📱 **Адаптивный Дизайн** - Работает на всех устройствах
- ♿ **Доступность** - Поддержка `prefers-reduced-motion`

## 🚀 Быстрый Старт

### Установка

```bash
git clone https://github.com/c4m1r/ascii_maker.git
cd ascii_maker
npm install
```

### Разработка

```bash
npm run dev
# Откройте http://localhost:3000
```

### Сборка для Продакшена

```bash
npm run build
npm run preview
```

## 🎬 Создайте Свою ASCII Анимацию

### 1. Установите Python Зависимости

```bash
pip install opencv-python Pillow
```

### 2. Поместите Ваше Видео

```bash
video/your-video.mp4
```

### 3. Конвертируйте Видео

```bash
# Цветная ASCII
python convert_video_opencv.py video/your-video.mp4 -m colored -t 15 -c 80 -f 24

# Монохромная ASCII
python convert_video_opencv.py video/your-video.mp4 -m monochrome_browser -t 15 -c 80 -f 24
```

### 4. Скопируйте Кадры

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

### 5. Запустите Dev Сервер

```bash
npm run dev
```

## 📊 Технологии

- **Frontend**: Vite 6, React 19, TypeScript 5
- **Стилизация**: Tailwind CSS 3
- **Анимация**: requestAnimationFrame API
- **Конвертация**: Python, OpenCV, Pillow
- **Эффекты**: CSS blend modes (color-dodge)
- **Деплой**: GitHub Pages

## 🔧 Параметры Конвертации

| Параметр | Описание | Значения |
|----------|----------|----------|
| `-m, --mode` | Режим конвертации | `colored`, `monochrome_browser` |
| `-t, --threshold` | Порог яркости | 15-35 (выше = больше прозрачности) |
| `-c, --columns` | Ширина в символах | 80-120 (больше = больше деталей) |
| `-f, --fps` | Кадров в секунду | 24-48 (выше = плавнее) |

## 💡 Советы

- Используйте короткие видео (3-10 сек) для лучшей производительности
- Высокий порог (30-40) для большей прозрачности
- Увеличьте ширину (100-120) для большей детализации
- Снизьте FPS (12-18) для меньших файлов

## 📈 Производительность

### Потребление Памяти
- **2 анимации**: ~500 МБ
- **Оптимизация**: Предварительно выделенные массивы, батч-загрузка, очистка при unmount

### Время Загрузки
- **Первый рендер**: ~1-2 секунды
- **Размер бандла**: ~95 KB (gzipped)

## 🌐 Деплой

### GitHub Pages (Автоматически)

Push в ветку `main` и GitHub Actions автоматически задеплоит:

```bash
git add .
git commit -m "Update ASCII Maker"
git push
```

Сайт будет доступен по адресу: `https://c4m1r.github.io/ascii_maker/`

## 🤝 Вклад

Приветствуются пул-реквесты! Для больших изменений сначала откройте issue.

## 📄 Лицензия

MIT License - см. [LICENSE](LICENSE) для деталей

## 🙏 Благодарности

- [Ghostty terminal](https://ghostty.org) - Вдохновение для подхода к анимации
- [Pierce Bartine](https://pierce.dev/notes/making-the-ghostty-animation/) - Техническое объяснение

## 👤 Автор

**C4m1r**
- Website: [https://c4m1r.github.io](https://c4m1r.github.io)
- GitHub: [@c4m1r](https://github.com/c4m1r)
- Repository: [ascii_maker](https://github.com/c4m1r/ascii_maker)

---

**ASCII Maker by C4m1r © 2025**

⭐ Если вам нравится этот проект, поставьте звезду на GitHub!

