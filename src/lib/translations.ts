export type Language = 'en' | 'ru' | 'zh' | 'es';

export const translations = {
  en: {
    title: "ASCII Maker",
    subtitle: "Convert video to ASCII animation with two visual modes",
    approach: "Inspired by Ghostty terminal animation approach",
    homeButton: "Home",
    githubButton: "Star on GitHub",
    githubTitle: "Visit our GitHub repository and give us a star!",
    
    // Animation cards
    colored: {
      title: "Colored ASCII",
      icon: "🎨",
      description: "Full-color conversion with HTML color spans",
      params: "threshold: 15, colored mode"
    },
    monochrome: {
      title: "Monochrome ASCII",
      icon: "⚫",
      description: "Single color, classic ASCII-art style",
      params: "threshold: 15, monochrome mode"
    },
    blackwhite: {
      title: "Black & White ASCII",
      icon: "⬛",
      description: "High contrast black and white effect",
      params: "threshold: 35, black & white mode"
    },
    
    // Technical details
    technical: {
      title: "Technical Details",
      description: "Information about conversion and technologies used",
      
      conversion: {
        title: "Conversion Parameters",
        sourceVideo: "Source video",
        resolution: "Resolution",
        fps: "FPS",
        totalFrames: "Total frames",
        duration: "Duration",
        columns: "columns",
        framesPerSec: "frames/sec",
        seconds: "seconds"
      },
      
      technologies: {
        title: "Technologies Used",
        frontend: "Frontend",
        styling: "Styling",
        animation: "Animation",
        conversion: "Conversion",
        effects: "Effects"
      },
      
      modes: {
        title: "Conversion Modes",
        coloredDesc: "Preserves RGB colors of each pixel, converting them to HTML span elements with inline styles",
        monochromeDesc: "Uses only pixel brightness, converting to grayscale with color overlay via CSS blend mode",
        blackwhiteDesc: "High brightness threshold (35) removes dark areas, creating a high-contrast black and white effect"
      }
    },
    
    // How to section
    howTo: {
      title: "How to Create Your Own ASCII Animation",
      description: "Step-by-step guide to convert any video to ASCII art",
      
      steps: {
        step0: {
          title: "Clone from GitHub",
          content: "Download the project from GitHub repository:",
          code: "git clone https://github.com/c4m1r/ascii_maker.git\ncd ascii_maker"
        },
        step1: {
          title: "Install Dependencies",
          content: "Install Python and required libraries:",
          code: "pip install opencv-python Pillow"
        },
        step2: {
          title: "Place Your Video",
          content: "Put your video file in the project folder, for example:",
          code: "video/my-video.mp4"
        },
        step3: {
          title: "Run Conversion Script",
          content: "Convert video to ASCII with different modes:",
          colored: "# Colored ASCII",
          monochrome: "# Monochrome ASCII",
          blackwhite: "# Black & White ASCII"
        },
        step4: {
          title: "Copy Frames to Public",
          content: "Copy generated frames to the public folder:",
          windows: "For Windows (PowerShell):",
          linux: "For Linux/Mac (Bash):"
        },
        step5: {
          title: "Run Development Server",
          content: "Start the Vite development server:",
          code: "npm run dev",
          open: "Open your browser at"
        }
      },
      
      parameters: {
        title: "Conversion Parameters",
        mode: "Mode",
        modeDesc: "colored, monochrome, or transparent",
        threshold: "Threshold",
        thresholdDesc: "Brightness threshold (15-35)",
        columns: "Columns",
        columnsDesc: "Width in characters (80-120)",
        fps: "FPS",
        fpsDesc: "Frames per second (24-30)"
      },
      
      tips: {
        title: "Tips & Tricks",
        tip1: "Use higher threshold (30-40) for more transparency",
        tip2: "Increase columns (100-120) for better detail",
        tip3: "Lower FPS (12-18) for smaller file sizes",
        tip4: "Short videos (3-10 sec) work best"
      }
    }
  },
  
  ru: {
    title: "ASCII Maker",
    subtitle: "Конвертация видео в ASCII-анимацию с двумя визуальными режимами",
    approach: "Вдохновлено подходом анимации терминала Ghostty",
    homeButton: "На главную",
    githubButton: "⭐ GitHub",
    githubTitle: "Перейди сюда, чтобы поставить звёздочку на GitHub!",
    
    colored: {
      title: "Цветная ASCII",
      icon: "🎨",
      description: "Полноцветная конвертация с HTML color spans",
      params: "порог: 15, цветной режим"
    },
    monochrome: {
      title: "Монохромная ASCII",
      icon: "⚫",
      description: "Один цвет, классический ASCII-арт стиль",
      params: "порог: 15, монохромный режим"
    },
    blackwhite: {
      title: "Черно-белая ASCII",
      icon: "⬛",
      description: "Высококонтрастный черно-белый эффект",
      params: "порог: 35, черно-белый режим"
    },
    
    technical: {
      title: "Технические детали",
      description: "Информация о конвертации и использованных технологиях",
      
      conversion: {
        title: "Параметры конвертации",
        sourceVideo: "Исходное видео",
        resolution: "Разрешение",
        fps: "FPS",
        totalFrames: "Всего кадров",
        duration: "Длительность",
        columns: "символов",
        framesPerSec: "кадра/сек",
        seconds: "секунды"
      },
      
      technologies: {
        title: "Использованные технологии",
        frontend: "Frontend",
        styling: "Стилизация",
        animation: "Анимация",
        conversion: "Конвертация",
        effects: "Эффекты"
      },
      
      modes: {
        title: "Режимы конвертации",
        coloredDesc: "Сохраняет RGB цвета каждого пикселя, конвертируя их в HTML span элементы с inline стилями",
        monochromeDesc: "Использует только яркость пикселей, конвертируя в градации серого с наложением цветового оверлея",
        blackwhiteDesc: "Высокий порог яркости (35) удаляет темные области, создавая высококонтрастный черно-белый эффект"
      }
    },
    
    howTo: {
      title: "Как создать свою ASCII-анимацию",
      description: "Пошаговое руководство по конвертации любого видео в ASCII-арт",
      
      steps: {
        step0: {
          title: "Скачайте с GitHub",
          content: "Скачайте проект из репозитория GitHub:",
          code: "git clone https://github.com/c4m1r/ascii_maker.git\ncd ascii_maker"
        },
        step1: {
          title: "Установите зависимости",
          content: "Установите Python и необходимые библиотеки:",
          code: "pip install opencv-python Pillow"
        },
        step2: {
          title: "Поместите ваше видео",
          content: "Поместите файл видео в папку проекта, например:",
          code: "video/my-video.mp4"
        },
        step3: {
          title: "Запустите скрипт конвертации",
          content: "Конвертируйте видео в ASCII с разными режимами:",
          colored: "# Цветная ASCII",
          monochrome: "# Монохромная ASCII",
          blackwhite: "# Черно-белая ASCII"
        },
        step4: {
          title: "Скопируйте кадры в public",
          content: "Скопируйте сгенерированные кадры в папку public:",
          windows: "Для Windows (PowerShell):",
          linux: "Для Linux/Mac (Bash):"
        },
        step5: {
          title: "Запустите сервер разработки",
          content: "Запустите сервер разработки Vite:",
          code: "npm run dev",
          open: "Откройте браузер по адресу"
        }
      },
      
      parameters: {
        title: "Параметры конвертации",
        mode: "Режим",
        modeDesc: "colored, monochrome или transparent",
        threshold: "Порог",
        thresholdDesc: "Порог яркости (15-35)",
        columns: "Ширина",
        columnsDesc: "Ширина в символах (80-120)",
        fps: "FPS",
        fpsDesc: "Кадров в секунду (24-30)"
      },
      
      tips: {
        title: "Советы и хитрости",
        tip1: "Используйте высокий порог (30-40) для большей прозрачности",
        tip2: "Увеличьте ширину (100-120) для большей детализации",
        tip3: "Снизьте FPS (12-18) для меньшего размера файлов",
        tip4: "Короткие видео (3-10 сек) работают лучше всего"
      }
    }
  },
  
  zh: {
    title: "ASCII Maker",
    subtitle: "将视频转换为具有两种视觉模式的ASCII动画",
    approach: "受Ghostty终端动画方法启发",
    homeButton: "主页",
    githubButton: "GitHub 星标",
    githubTitle: "访问我们的GitHub仓库并给我们加星！",
    
    colored: {
      title: "彩色ASCII",
      icon: "🎨",
      description: "带HTML颜色跨度的全彩转换",
      params: "阈值：15，彩色模式"
    },
    monochrome: {
      title: "单色ASCII",
      icon: "⚫",
      description: "单色，经典ASCII艺术风格",
      params: "阈值：15，单色模式"
    },
    blackwhite: {
      title: "黑白ASCII",
      icon: "⬛",
      description: "高对比度黑白效果",
      params: "阈值：35，黑白模式"
    },
    
    technical: {
      title: "技术细节",
      description: "关于转换和使用技术的信息",
      
      conversion: {
        title: "转换参数",
        sourceVideo: "源视频",
        resolution: "分辨率",
        fps: "FPS",
        totalFrames: "总帧数",
        duration: "时长",
        columns: "列",
        framesPerSec: "帧/秒",
        seconds: "秒"
      },
      
      technologies: {
        title: "使用的技术",
        frontend: "前端",
        styling: "样式",
        animation: "动画",
        conversion: "转换",
        effects: "效果"
      },
      
      modes: {
        title: "转换模式",
        coloredDesc: "保留每个像素的RGB颜色，将其转换为带内联样式的HTML span元素",
        monochromeDesc: "仅使用像素亮度，通过CSS混合模式将颜色叠加转换为灰度",
        blackwhiteDesc: "高亮度阈值（35）去除暗区，创建高对比度黑白效果"
      }
    },
    
    howTo: {
      title: "如何创建自己的ASCII动画",
      description: "将任何视频转换为ASCII艺术的分步指南",
      
      steps: {
        step0: {
          title: "从GitHub克隆",
          content: "从GitHub仓库下载项目：",
          code: "git clone https://github.com/c4m1r/ascii_maker.git\ncd ascii_maker"
        },
        step1: {
          title: "安装依赖",
          content: "安装Python和所需的库：",
          code: "pip install opencv-python Pillow"
        },
        step2: {
          title: "放置您的视频",
          content: "将视频文件放入项目文件夹，例如：",
          code: "video/my-video.mp4"
        },
        step3: {
          title: "运行转换脚本",
          content: "使用不同模式将视频转换为ASCII：",
          colored: "# 彩色ASCII",
          monochrome: "# 单色ASCII",
          blackwhite: "# 黑白ASCII"
        },
        step4: {
          title: "复制帧到公共文件夹",
          content: "将生成的帧复制到public文件夹：",
          windows: "Windows (PowerShell)：",
          linux: "Linux/Mac (Bash)："
        },
        step5: {
          title: "运行开发服务器",
          content: "启动Vite开发服务器：",
          code: "npm run dev",
          open: "在浏览器中打开"
        }
      },
      
      parameters: {
        title: "转换参数",
        mode: "模式",
        modeDesc: "colored、monochrome或transparent",
        threshold: "阈值",
        thresholdDesc: "亮度阈值（15-35）",
        columns: "列数",
        columnsDesc: "字符宽度（80-120）",
        fps: "FPS",
        fpsDesc: "每秒帧数（24-30）"
      },
      
      tips: {
        title: "技巧与窍门",
        tip1: "使用更高的阈值（30-40）获得更多透明度",
        tip2: "增加列数（100-120）以获得更好的细节",
        tip3: "降低FPS（12-18）以减小文件大小",
        tip4: "短视频（3-10秒）效果最好"
      }
    }
  },
  
  es: {
    title: "ASCII Maker",
    subtitle: "Convierte video a animación ASCII con dos modos visuales",
    approach: "Inspirado en el enfoque de animación del terminal Ghostty",
    homeButton: "Inicio",
    githubButton: "⭐ GitHub",
    githubTitle: "¡Visita nuestro repositorio de GitHub y danos una estrella!",
    
    colored: {
      title: "ASCII a Color",
      icon: "🎨",
      description: "Conversión a todo color con spans de color HTML",
      params: "umbral: 15, modo color"
    },
    monochrome: {
      title: "ASCII Monocromático",
      icon: "⚫",
      description: "Un solo color, estilo ASCII-art clásico",
      params: "umbral: 15, modo monocromático"
    },
    blackwhite: {
      title: "ASCII Blanco y Negro",
      icon: "⬛",
      description: "Efecto de alto contraste en blanco y negro",
      params: "umbral: 35, modo blanco y negro"
    },
    
    technical: {
      title: "Detalles Técnicos",
      description: "Información sobre la conversión y tecnologías utilizadas",
      
      conversion: {
        title: "Parámetros de Conversión",
        sourceVideo: "Video fuente",
        resolution: "Resolución",
        fps: "FPS",
        totalFrames: "Total de cuadros",
        duration: "Duración",
        columns: "columnas",
        framesPerSec: "cuadros/seg",
        seconds: "segundos"
      },
      
      technologies: {
        title: "Tecnologías Utilizadas",
        frontend: "Frontend",
        styling: "Estilización",
        animation: "Animación",
        conversion: "Conversión",
        effects: "Efectos"
      },
      
      modes: {
        title: "Modos de Conversión",
        coloredDesc: "Conserva los colores RGB de cada píxel, convirtiéndolos en elementos HTML span con estilos en línea",
        monochromeDesc: "Utiliza solo el brillo de los píxeles, convirtiendo a escala de grises con superposición de color mediante modo de mezcla CSS",
        blackwhiteDesc: "Umbral de brillo alto (35) elimina áreas oscuras, creando un efecto de blanco y negro de alto contraste"
      }
    },
    
    howTo: {
      title: "Cómo Crear Tu Propia Animación ASCII",
      description: "Guía paso a paso para convertir cualquier video a arte ASCII",
      
      steps: {
        step0: {
          title: "Clonar desde GitHub",
          content: "Descarga el proyecto del repositorio de GitHub:",
          code: "git clone https://github.com/c4m1r/ascii_maker.git\ncd ascii_maker"
        },
        step1: {
          title: "Instalar Dependencias",
          content: "Instala Python y las bibliotecas necesarias:",
          code: "pip install opencv-python Pillow"
        },
        step2: {
          title: "Coloca Tu Video",
          content: "Coloca tu archivo de video en la carpeta del proyecto, por ejemplo:",
          code: "video/my-video.mp4"
        },
        step3: {
          title: "Ejecuta el Script de Conversión",
          content: "Convierte el video a ASCII con diferentes modos:",
          colored: "# ASCII a Color",
          monochrome: "# ASCII Monocromático",
          blackwhite: "# ASCII Blanco y Negro"
        },
        step4: {
          title: "Copia los Cuadros a Public",
          content: "Copia los cuadros generados a la carpeta public:",
          windows: "Para Windows (PowerShell):",
          linux: "Para Linux/Mac (Bash):"
        },
        step5: {
          title: "Ejecuta el Servidor de Desarrollo",
          content: "Inicia el servidor de desarrollo de Vite:",
          code: "npm run dev",
          open: "Abre tu navegador en"
        }
      },
      
      parameters: {
        title: "Parámetros de Conversión",
        mode: "Modo",
        modeDesc: "colored, monochrome o transparent",
        threshold: "Umbral",
        thresholdDesc: "Umbral de brillo (15-35)",
        columns: "Columnas",
        columnsDesc: "Ancho en caracteres (80-120)",
        fps: "FPS",
        fpsDesc: "Cuadros por segundo (24-30)"
      },
      
      tips: {
        title: "Consejos y Trucos",
        tip1: "Usa un umbral más alto (30-40) para más transparencia",
        tip2: "Aumenta las columnas (100-120) para mejor detalle",
        tip3: "Reduce el FPS (12-18) para archivos más pequeños",
        tip4: "Los videos cortos (3-10 seg) funcionan mejor"
      }
    }
  }
};

