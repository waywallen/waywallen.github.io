import type { Locale, RouteSlug } from './config';

type Copy = {
  siteDescription: string;
  nav: Record<
    'features' | 'screenshots' | 'plugins' | 'docs' | 'download',
    string
  >;
  menu: string;
  language: string;
  theme: string;
  themes: [string, string, string];
  github: string;
  footer: string;
  support: { sponsor: string; contribute: string; reportBug: string };
  credits: { developer: string; website: string };
  pages: Record<RouteSlug, { title: string; description: string }>;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    download: string;
    github: string;
  };
  sections: {
    highlights: string;
    highlightsBody: string;
    desktops: string;
    desktopsBody: string;
    gallery: string;
    galleryBody: string;
    galleryAction: string;
    explore: string;
  };
  featureText: [string, string][];
  screenshotText: [string, string][];
  downloadText: [string, string, string][];
  pluginText: [string, string][];
  pluginLabels: [string, string];
  docsCards: [string, string, RouteSlug][];
  integration: {
    desktop: string;
    integration: string;
    mouse: string;
    pause: string;
    yes: string;
    no: string;
    scrollHint: string;
  };
  doc: {
    installation: string[];
    desktop: string[];
    wallpaper: string[];
    troubleshooting: string[];
  };
  troubleshootingDetails: [string, string][];
  faq: [string, string][];
  notFound: { title: string; body: string; action: string };
};

const en: Copy = {
  siteDescription:
    'Waywallen is a dynamic wallpaper solution for Linux desktops.',
  nav: {
    features: 'Features',
    screenshots: 'Screenshots',
    plugins: 'Plugins',
    docs: 'Docs',
    download: 'Download',
  },
  menu: 'Menu',
  language: 'Language',
  theme: 'Theme',
  themes: ['System', 'Light', 'Dark'],
  github: 'GitHub',
  footer: 'An open-source dynamic wallpaper solution for Linux.',
  support: {
    sponsor: 'Sponsor on Ko-fi',
    contribute: 'Contribute code',
    reportBug: 'Report a bug',
  },
  credits: {
    developer: 'Waywallen by',
    website: 'Website by',
  },
  pages: {
    '': {
      title: 'Dynamic wallpapers for Linux',
      description:
        'Bring video, web, scene and image wallpapers to your Linux desktop with Waywallen.',
    },
    features: {
      title: 'Features',
      description:
        'Explore Waywallen wallpaper formats, hardware decoding, plugins and desktop integration.',
    },
    download: {
      title: 'Download',
      description:
        'Install Waywallen with AppImage, Flatpak, or build it from source.',
    },
    screenshots: {
      title: 'Screenshots',
      description:
        'Explore the Waywallen interface for wallpapers, displays and system status.',
    },
    plugins: {
      title: 'Plugins',
      description:
        'Use Waywallen’s built-in plugins and the external Wallpaper Engine component.',
    },
    docs: {
      title: 'Documentation',
      description:
        'Install, integrate and troubleshoot Waywallen on your Linux desktop.',
    },
    'docs/installation': {
      title: 'Installation',
      description:
        'Choose an AppImage, Flatpak or source installation for Waywallen.',
    },
    'docs/desktop-integration': {
      title: 'Desktop integration',
      description:
        'Connect Waywallen to KDE Plasma, GNOME and layer-shell desktops.',
    },
    'docs/wallpaper-engine': {
      title: 'Wallpaper Engine',
      description:
        'Use Scene and Web wallpapers through the open-wallpaper-engine plugin.',
    },
    'docs/troubleshooting': {
      title: 'Troubleshooting',
      description:
        'Confirmed solutions for NVIDIA, Flatpak permissions, logs and debugging.',
    },
    faq: {
      title: 'Frequently asked questions',
      description:
        'Answers about video decoding, logs and debugging Waywallen.',
    },
  },
  hero: {
    eyebrow: 'Open source · Linux',
    title: 'Your desktop, in motion.',
    body: 'Waywallen brings dynamic wallpapers to Linux with native desktop integration, a focused Material interface and an extensible plugin system. The project began as a Wallpaper Engine plugin for KDE.',
    download: 'Download Waywallen',
    github: 'View on GitHub',
  },
  sections: {
    highlights: 'Built for dynamic desktops',
    highlightsBody:
      'Images, video and community integrations share one coherent library.',
    desktops: 'At home on your desktop',
    desktopsBody:
      'Dedicated integrations connect Waywallen output to popular Linux desktop shells.',
    gallery: 'Waywallen interface',
    galleryBody:
      'Manage wallpapers, displays and renderer health without leaving the app.',
    galleryAction: 'View all screenshots',
    explore: 'Explore Waywallen',
  },
  featureText: [
    [
      'Dynamic wallpapers',
      'Organize and display image and video wallpapers from a single library.',
    ],
    [
      'Hardware video decoding',
      'The video plugin supports Vulkan and VA-API hardware decoding with a software fallback.',
    ],
    [
      'Wallpaper Engine compatibility',
      'The external open-wallpaper-engine component adds Scene and Web wallpaper support.',
    ],
    [
      'Wallhaven catalog',
      'Search, filter and download wallpapers from Wallhaven without leaving Discover.',
    ],
    [
      'Plugin architecture',
      'Use built-in renderers or install compatible external components from the Plugins page.',
    ],
    [
      'Desktop integration',
      'Connect through KDE Plasma, GNOME or the Wayland layer-shell client.',
    ],
  ],
  screenshotText: [
    [
      'Wallpaper library',
      'Browse, filter and manage your wallpaper collection.',
    ],
    [
      'Display configuration',
      'Assign wallpapers and canvases across connected displays.',
    ],
    [
      'System status',
      'Inspect the daemon, renderers, graphics devices and runtime health.',
    ],
  ],
  downloadText: [
    [
      'AppImage',
      'Download the newest portable build from GitHub Releases.',
      'Open latest release',
    ],
    [
      'Flatpak',
      'Install the verified Waywallen package from Flathub.',
      'View on Flathub',
    ],
    [
      'Build from source',
      'Follow the project’s maintained build guide for development builds.',
      'Read BUILD.md',
    ],
  ],
  pluginText: [
    [
      'Image wallpapers',
      'Adds local image folders to the library, scans nested directories and renders PNG, JPEG, WebP, AVIF, GIF and other common formats.',
    ],
    [
      'Video wallpapers',
      'Adds video files to the library with looping, audio controls, resolution limits and Vulkan, VA-API or software decoding.',
    ],
    [
      'Wallhaven catalog',
      'Browse and search Wallhaven in Discover, filter by topic, resolution and content rating, inspect details and download wallpapers into Waywallen.',
    ],
    [
      'Wallpaper Engine integration',
      'External Waywallen component for installed Scene and Web projects, Steam Workshop browsing and subscription management. Steam downloads subscribed items.',
    ],
  ],
  pluginLabels: ['Built in', 'External'],
  docsCards: [
    [
      'Installation',
      'AppImage, Flatpak and source builds.',
      'docs/installation',
    ],
    [
      'Desktop integration',
      'KDE Plasma, GNOME and layer-shell setup.',
      'docs/desktop-integration',
    ],
    [
      'Wallpaper Engine',
      'Install and use the external component.',
      'docs/wallpaper-engine',
    ],
    [
      'Troubleshooting',
      'NVIDIA, Flatpak, logs and debugging.',
      'docs/troubleshooting',
    ],
  ],
  integration: {
    desktop: 'Desktop',
    integration: 'Integration',
    mouse: 'Mouse input',
    pause: 'Auto pause',
    yes: 'Supported',
    no: 'Not supported',
    scrollHint: 'Scroll horizontally to see all columns',
  },
  doc: {
    installation: [
      'AppImage: open the latest GitHub release and download the appropriate portable build.',
      'Flatpak: install Waywallen from its verified Flathub listing.',
      'Source: use BUILD.md for current compiler, Qt, Vulkan and CMake requirements.',
    ],
    desktop: [
      'KDE Plasma and GNOME use dedicated extensions from waywallen-display.',
      'Hyprland, Niri, Wayfire, Sway and COSMIC use the Wayland layer-shell client.',
      'The AppImage already embeds the layer-shell client and Waywallen manages it.',
    ],
    wallpaper: [
      'Download a prebuilt ZIP from the open-wallpaper-engine releases page.',
      'On Flatpak and AppImage builds, install the ZIP from the Plugins page in Waywallen.',
      'Source and distribution-package installations must build or package the plugin appropriately.',
    ],
    troubleshooting: [
      'NVIDIA Web wallpapers: disable shared_texture_enabled in the web renderer settings.',
      'NVIDIA video decoding: use nvidia-vaapi-driver to expose NVDEC through VA-API; there is no dedicated NVDEC backend.',
    ],
  },
  troubleshootingDetails: [
    [
      'Flatpak media permission',
      'Flatpak needs access to the MPRIS D-Bus service to read information about the currently playing track. Grant the permission for the current user:',
    ],
    [
      'Collect logs',
      'First stop the running Waywallen daemon. Then enable detailed Rust and zbus logging and launch Waywallen from the same terminal:',
    ],
    [
      'Debug inside Flatpak',
      'Install the matching Flatpak debug package, open a development shell and start Waywallen with GDB. Decline debuginfod if prompted, reproduce the problem, then request a backtrace:',
    ],
    [
      'Debug a core dump',
      'Alternatively, export an existing core dump and open it with the Waywallen symbols from the Flatpak development environment:',
    ],
  ],
  faq: [
    [
      'How does hardware video decoding work?',
      'The default auto mode tries Vulkan, then VA-API, then software decoding. You can choose hwdec in the waywallen-video settings.',
    ],
    [
      'Does Waywallen support Wallpaper Engine wallpapers?',
      'Yes. The external open-wallpaper-engine component, maintained alongside Waywallen, provides Scene and Web support.',
    ],
    [
      'How do I install an external component?',
      'Download its ZIP archive and install it from the Plugins page. Waywallen will then notify you about updates.',
    ],
    [
      'Where can I get logs?',
      'Stop the running daemon, then launch Waywallen with RSTD_LOG=debug and RUST_LOG=debug,zbus=warn.',
    ],
  ],
  notFound: {
    title: 'Page not found',
    body: 'The page may have moved or the address may be incorrect.',
    action: 'Back to home',
  },
};

const ru: Copy = {
  ...en,
  siteDescription:
    'Waywallen — решение для динамических обоев на рабочих столах Linux.',
  nav: {
    features: 'Возможности',
    screenshots: 'Скриншоты',
    plugins: 'Плагины',
    docs: 'Документация',
    download: 'Скачать',
  },
  menu: 'Меню',
  language: 'Язык',
  theme: 'Тема',
  themes: ['Системная', 'Светлая', 'Тёмная'],
  footer: 'Open-source решение для динамических обоев в Linux.',
  support: {
    sponsor: 'Поддержать на Ko-fi',
    contribute: 'Внести вклад в код',
    reportBug: 'Сообщить об ошибке',
  },
  credits: {
    developer: 'Waywallen разработан',
    website: 'Сайт создан',
  },
  pages: {
    '': {
      title: 'Динамические обои для Linux',
      description:
        'Видео, веб-, сценические и обычные обои на рабочем столе Linux с Waywallen.',
    },
    features: {
      title: 'Возможности',
      description:
        'Форматы обоев, аппаратное декодирование, плагины и интеграция Waywallen.',
    },
    download: {
      title: 'Скачать',
      description:
        'Установите Waywallen через AppImage, Flatpak или соберите из исходников.',
    },
    screenshots: {
      title: 'Скриншоты',
      description: 'Интерфейс Waywallen: обои, дисплеи и состояние системы.',
    },
    plugins: {
      title: 'Плагины',
      description:
        'Используйте встроенные плагины Waywallen и внешний компонент для Wallpaper Engine.',
    },
    docs: {
      title: 'Документация',
      description: 'Установка, интеграция и устранение неполадок Waywallen.',
    },
    'docs/installation': {
      title: 'Установка',
      description:
        'Выберите AppImage, Flatpak или сборку Waywallen из исходников.',
    },
    'docs/desktop-integration': {
      title: 'Интеграция с окружением',
      description: 'Подключите Waywallen к KDE Plasma, GNOME и layer-shell.',
    },
    'docs/wallpaper-engine': {
      title: 'Wallpaper Engine',
      description: 'Используйте Scene и Web обои через open-wallpaper-engine.',
    },
    'docs/troubleshooting': {
      title: 'Устранение неполадок',
      description: 'Проверенные решения для NVIDIA, Flatpak, логов и отладки.',
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      description: 'Ответы о декодировании видео, логах и отладке Waywallen.',
    },
  },
  hero: {
    eyebrow: 'Open source · Linux',
    title: 'Ваш рабочий стол в движении.',
    body: 'Waywallen добавляет динамические обои в Linux: нативная интеграция, лаконичный Material-интерфейс и расширяемая система плагинов. Проект начинался как плагин Wallpaper Engine для KDE.',
    download: 'Скачать Waywallen',
    github: 'Открыть GitHub',
  },
  sections: {
    highlights: 'Создан для динамичного рабочего стола',
    highlightsBody:
      'Изображения, видео и дополнительные интеграции в одной библиотеке.',
    desktops: 'Работает в вашем окружении',
    desktopsBody:
      'Интеграции подключают вывод Waywallen к популярным оболочкам Linux.',
    gallery: 'Интерфейс Waywallen',
    galleryBody: 'Управляйте обоями, дисплеями и состоянием рендереров.',
    galleryAction: 'Посмотреть все скриншоты',
    explore: 'Подробнее о Waywallen',
  },
  featureText: [
    ['Динамические обои', 'Изображения и видео в единой библиотеке обоев.'],
    [
      'Аппаратное декодирование',
      'Видео-плагин поддерживает Vulkan и VA-API с программным fallback.',
    ],
    [
      'Совместимость с Wallpaper Engine',
      'Внешний компонент open-wallpaper-engine добавляет Scene- и Web-обои.',
    ],
    [
      'Каталог Wallhaven',
      'Ищите, фильтруйте и скачивайте обои с Wallhaven прямо в разделе «Обзор».',
    ],
    [
      'Система плагинов',
      'Используйте встроенные рендереры или устанавливайте совместимые внешние компоненты на странице плагинов.',
    ],
    [
      'Интеграция с Linux',
      'Подключайтесь через KDE Plasma, GNOME или Wayland layer-shell.',
    ],
  ],
  screenshotText: [
    ['Библиотека обоев', 'Просмотр, фильтрация и управление коллекцией.'],
    ['Настройка дисплеев', 'Назначение обоев и холстов подключённым дисплеям.'],
    [
      'Состояние системы',
      'Демон, рендереры, графические устройства и диагностика.',
    ],
  ],
  downloadText: [
    [
      'AppImage',
      'Скачайте свежую переносимую сборку на GitHub Releases.',
      'Открыть последний релиз',
    ],
    [
      'Flatpak',
      'Установите проверенный пакет Waywallen из Flathub.',
      'Открыть Flathub',
    ],
    [
      'Сборка из исходников',
      'Следуйте актуальному руководству проекта.',
      'Читать BUILD.md',
    ],
  ],
  pluginText: [
    [
      'Обои из изображений',
      'Добавляет локальные папки с изображениями в библиотеку, сканирует вложенные каталоги и отображает PNG, JPEG, WebP, AVIF, GIF и другие распространённые форматы.',
    ],
    [
      'Видеообои',
      'Добавляет видеофайлы в библиотеку: зацикливание, управление звуком, ограничение разрешения и декодирование через Vulkan, VA-API либо программно.',
    ],
    [
      'Каталог Wallhaven',
      'Позволяет искать и просматривать Wallhaven в разделе «Обзор», фильтровать по темам, разрешению и рейтингу содержимого, изучать сведения и скачивать обои в Waywallen.',
    ],
    [
      'Интеграция с Wallpaper Engine',
      'Внешний компонент Waywallen для установленных Scene- и Web-проектов, просмотра Steam Workshop и управления подписками. Подписанные элементы загружает Steam.',
    ],
  ],
  pluginLabels: ['Встроенный', 'Внешний'],
  docsCards: [
    ['Установка', 'AppImage, Flatpak и сборка.', 'docs/installation'],
    [
      'Интеграция',
      'KDE Plasma, GNOME и layer-shell.',
      'docs/desktop-integration',
    ],
    [
      'Wallpaper Engine',
      'Установка внешнего компонента.',
      'docs/wallpaper-engine',
    ],
    ['Неполадки', 'NVIDIA, Flatpak, логи и отладка.', 'docs/troubleshooting'],
  ],
  integration: {
    desktop: 'Окружение',
    integration: 'Интеграция',
    mouse: 'Ввод мыши',
    pause: 'Автопауза',
    yes: 'Поддерживается',
    no: 'Не поддерживается',
    scrollHint: 'Прокрутите таблицу по горизонтали, чтобы увидеть все столбцы',
  },
  doc: {
    installation: [
      'AppImage: откройте последний релиз GitHub и скачайте подходящую переносимую сборку.',
      'Flatpak: установите Waywallen с проверенной страницы Flathub.',
      'Исходники: актуальные требования к компилятору, Qt, Vulkan и CMake указаны в BUILD.md.',
    ],
    desktop: [
      'KDE Plasma и GNOME используют отдельные расширения waywallen-display.',
      'Hyprland, Niri, Wayfire, Sway и COSMIC используют клиент Wayland layer-shell.',
      'Клиент layer-shell уже встроен в AppImage и управляется Waywallen.',
    ],
    wallpaper: [
      'Скачайте готовый ZIP на странице релизов open-wallpaper-engine.',
      'В сборках Flatpak и AppImage установите ZIP на странице «Плагины».',
      'Для сборки из исходников или пакета дистрибутива плагин нужно собрать либо установить отдельно.',
    ],
    troubleshooting: [
      'Web-обои на NVIDIA: отключите shared_texture_enabled в настройках веб-рендерера.',
      'Декодирование на NVIDIA: используйте nvidia-vaapi-driver для NVDEC через VA-API; отдельного backend NVDEC нет.',
    ],
  },
  troubleshootingDetails: [
    [
      'Доступ Flatpak к медиаплееру',
      'Для чтения сведений о текущем треке Flatpak требуется доступ к службе MPRIS через D-Bus. Выдайте разрешение текущему пользователю:',
    ],
    [
      'Сбор логов',
      'Сначала остановите запущенный демон Waywallen. Затем включите подробные логи Rust и zbus и запустите Waywallen из того же терминала:',
    ],
    [
      'Отладка внутри Flatpak',
      'Установите соответствующий Debug-пакет Flatpak, откройте среду разработки и запустите Waywallen через GDB. При запросе откажитесь от debuginfod, воспроизведите проблему и получите backtrace:',
    ],
    [
      'Отладка дампа памяти',
      'Также можно сохранить существующий core dump и открыть его с символами Waywallen в среде разработки Flatpak:',
    ],
  ],
  faq: [
    [
      'Как работает аппаратное декодирование видео?',
      'Режим auto пробует Vulkan, затем VA-API и программное декодирование. В настройках waywallen-video можно выбрать hwdec.',
    ],
    [
      'Поддерживаются ли обои Wallpaper Engine?',
      'Да. Внешний компонент open-wallpaper-engine, который развивается вместе с Waywallen, поддерживает Scene- и Web-обои.',
    ],
    [
      'Как установить внешний компонент?',
      'Скачайте ZIP и установите его на странице плагинов. Waywallen будет уведомлять об обновлениях.',
    ],
    [
      'Как получить логи?',
      'Остановите демон и запустите Waywallen с RSTD_LOG=debug и RUST_LOG=debug,zbus=warn.',
    ],
  ],
  notFound: {
    title: 'Страница не найдена',
    body: 'Возможно, страница перемещена или адрес указан неверно.',
    action: 'На главную',
  },
};

const zh: Copy = {
  ...en,
  siteDescription: 'Waywallen 是一个为 Linux 桌面打造的动态壁纸解决方案。',
  nav: {
    features: '功能',
    screenshots: '界面',
    plugins: '插件',
    docs: '文档',
    download: '下载',
  },
  menu: '菜单',
  language: '语言',
  theme: '主题',
  themes: ['跟随系统', '浅色', '深色'],
  footer: '面向 Linux 的开源动态壁纸解决方案。',
  support: {
    sponsor: '在 Ko-fi 上赞助',
    contribute: '贡献代码',
    reportBug: '报告问题',
  },
  credits: {
    developer: 'Waywallen 开发者',
    website: '网站作者',
  },
  pages: {
    '': {
      title: 'Linux 动态壁纸',
      description:
        '使用 Waywallen 将视频、网页、场景和图片壁纸带到 Linux 桌面。',
    },
    features: {
      title: '功能',
      description: '了解 Waywallen 的壁纸格式、硬件解码、插件和桌面集成。',
    },
    download: {
      title: '下载',
      description: '通过 AppImage、Flatpak 安装 Waywallen，或从源码构建。',
    },
    screenshots: {
      title: '界面',
      description: '查看 Waywallen 的壁纸、显示器和系统状态界面。',
    },
    plugins: {
      title: '插件',
      description: '使用 Waywallen 内置插件和外置 Wallpaper Engine 组件。',
    },
    docs: {
      title: '文档',
      description: '安装 Waywallen、集成 Linux 桌面并解决常见问题。',
    },
    'docs/installation': {
      title: '安装',
      description: '选择 AppImage、Flatpak 或源码安装。',
    },
    'docs/desktop-integration': {
      title: '桌面集成',
      description: '将 Waywallen 连接到 KDE Plasma、GNOME 和 layer-shell。',
    },
    'docs/wallpaper-engine': {
      title: 'Wallpaper Engine',
      description: '通过 open-wallpaper-engine 使用 Scene 和 Web 壁纸。',
    },
    'docs/troubleshooting': {
      title: '故障排除',
      description: 'NVIDIA、Flatpak 权限、日志和调试的已确认方案。',
    },
    faq: { title: '常见问题', description: '关于视频解码、日志和调试的回答。' },
  },
  hero: {
    eyebrow: '开源 · Linux',
    title: '让桌面动起来。',
    body: 'Waywallen 为 Linux 带来动态壁纸、原生桌面集成、简洁的 Material 界面和可扩展插件系统。该项目最初是 KDE 的 Wallpaper Engine 插件。',
    download: '下载 Waywallen',
    github: '在 GitHub 查看',
  },
  sections: {
    highlights: '为动态桌面而生',
    highlightsBody: '图片、视频和社区集成都在同一个壁纸库中。',
    desktops: '融入你的桌面',
    desktopsBody: '专用集成将 Waywallen 输出连接到常见 Linux 桌面。',
    gallery: 'Waywallen 界面',
    galleryBody: '在应用中管理壁纸、显示器和渲染器状态。',
    galleryAction: '查看全部界面截图',
    explore: '探索 Waywallen',
  },
  featureText: [
    ['动态壁纸', '在同一个壁纸库中整理和显示图片与视频。'],
    ['硬件视频解码', '视频插件支持 Vulkan、VA-API 和软件回退。'],
    [
      'Wallpaper Engine 兼容',
      '外置 open-wallpaper-engine 组件添加 Scene 和 Web 壁纸支持。',
    ],
    ['Wallhaven 图库', '直接在“发现”中搜索、筛选并下载 Wallhaven 壁纸。'],
    ['插件架构', '使用内置渲染器，或从插件页安装兼容的外置组件。'],
    ['桌面集成', '通过 KDE Plasma、GNOME 或 Wayland layer-shell 连接。'],
  ],
  screenshotText: [
    ['壁纸库', '浏览、筛选和管理壁纸收藏。'],
    ['显示器配置', '为连接的显示器分配壁纸和画布。'],
    ['系统状态', '查看守护进程、渲染器、GPU 和运行状态。'],
  ],
  downloadText: [
    ['AppImage', '从 GitHub Releases 下载最新便携构建。', '打开最新版本'],
    ['Flatpak', '从 Flathub 安装经过验证的 Waywallen。', '在 Flathub 查看'],
    ['从源码构建', '按照项目维护的构建指南操作。', '阅读 BUILD.md'],
  ],
  pluginText: [
    [
      '图片壁纸',
      '将本地图片文件夹加入壁纸库，扫描嵌套目录，并渲染 PNG、JPEG、WebP、AVIF、GIF 等常见格式。',
    ],
    [
      '视频壁纸',
      '将视频加入壁纸库，提供循环播放、音频控制、分辨率限制，以及 Vulkan、VA-API 或软件解码。',
    ],
    [
      'Wallhaven 图库',
      '在“发现”中浏览和搜索 Wallhaven，按主题、分辨率和内容分级筛选，查看详情并下载到 Waywallen。',
    ],
    [
      'Wallpaper Engine 集成',
      'Waywallen 的外置组件，可使用已安装的 Scene 和 Web 项目、浏览 Steam Workshop 并管理订阅；订阅内容由 Steam 下载。',
    ],
  ],
  pluginLabels: ['内置', '外置'],
  docsCards: [
    ['安装', 'AppImage、Flatpak 和源码构建。', 'docs/installation'],
    [
      '桌面集成',
      'KDE Plasma、GNOME 和 layer-shell。',
      'docs/desktop-integration',
    ],
    ['Wallpaper Engine', '安装并使用外置组件。', 'docs/wallpaper-engine'],
    ['故障排除', 'NVIDIA、Flatpak、日志和调试。', 'docs/troubleshooting'],
  ],
  integration: {
    desktop: '桌面',
    integration: '集成',
    mouse: '鼠标输入',
    pause: '自动暂停',
    yes: '支持',
    no: '不支持',
    scrollHint: '横向滚动以查看所有列',
  },
  doc: {
    installation: [
      'AppImage：打开最新 GitHub Release，下载适合的便携构建。',
      'Flatpak：从经过验证的 Flathub 页面安装 Waywallen。',
      '源码：在 BUILD.md 中查看最新编译器、Qt、Vulkan 和 CMake 要求。',
    ],
    desktop: [
      'KDE Plasma 和 GNOME 使用 waywallen-display 专用扩展。',
      'Hyprland、Niri、Wayfire、Sway 和 COSMIC 使用 Wayland layer-shell 客户端。',
      'AppImage 已内置 layer-shell 客户端，并由 Waywallen 管理。',
    ],
    wallpaper: [
      '从 open-wallpaper-engine Releases 页面下载预构建 ZIP。',
      'Flatpak 和 AppImage 用户可在 Waywallen 插件页安装 ZIP。',
      '源码或发行版软件包需要单独构建或打包插件。',
    ],
    troubleshooting: [
      'NVIDIA Web 壁纸：在网页渲染器设置中关闭 shared_texture_enabled。',
      'NVIDIA 视频解码：使用 nvidia-vaapi-driver 通过 VA-API 提供 NVDEC；没有独立 NVDEC 后端。',
    ],
  },
  troubleshootingDetails: [
    [
      'Flatpak 媒体权限',
      'Flatpak 需要访问 MPRIS D-Bus 服务才能读取当前播放曲目信息。为当前用户授予权限：',
    ],
    [
      '收集日志',
      '先停止正在运行的 Waywallen 守护进程，然后启用详细的 Rust 和 zbus 日志，并从同一终端启动 Waywallen：',
    ],
    [
      '在 Flatpak 中调试',
      '安装对应的 Flatpak Debug 包，打开开发 shell，并通过 GDB 启动 Waywallen。若询问 debuginfod，请拒绝；复现问题后获取 backtrace：',
    ],
    [
      '调试 core dump',
      '也可以导出现有的 core dump，并在 Flatpak 开发环境中使用 Waywallen 调试符号打开：',
    ],
  ],
  faq: [
    [
      '硬件视频解码如何工作？',
      '默认 auto 模式依次尝试 Vulkan、VA-API 和软件解码，也可在 waywallen-video 设置中选择 hwdec。',
    ],
    [
      '是否支持 Wallpaper Engine 壁纸？',
      '支持。与 Waywallen 同步维护的外置 open-wallpaper-engine 组件提供 Scene 和 Web 支持。',
    ],
    [
      '如何安装外置组件？',
      '下载 ZIP 并在插件页面安装，Waywallen 会提示后续更新。',
    ],
    [
      '如何获取日志？',
      '停止守护进程，然后使用 RSTD_LOG=debug 和 RUST_LOG=debug,zbus=warn 启动 Waywallen。',
    ],
  ],
  notFound: {
    title: '页面未找到',
    body: '页面可能已移动，或地址有误。',
    action: '返回首页',
  },
};

export const content: Record<Locale, Copy> = { en, ru, 'zh-cn': zh };
