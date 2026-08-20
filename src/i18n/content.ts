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
    explore: string;
  };
  featureText: [string, string][];
  screenshotText: [string, string][];
  downloadText: [string, string, string][];
  pluginText: [string, string][];
  docsCards: [string, string, RouteSlug][];
  integration: {
    desktop: string;
    integration: string;
    mouse: string;
    pause: string;
    yes: string;
    no: string;
  };
  doc: {
    installation: string[];
    desktop: string[];
    wallpaper: string[];
    troubleshooting: string[];
  };
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
        'See the real Waywallen interface for wallpapers, displays and system status.',
    },
    plugins: {
      title: 'Plugins',
      description:
        'Extend Waywallen with official wallpaper plugins and open-wallpaper-engine.',
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
    body: 'Waywallen brings dynamic wallpapers to Linux with native desktop integration, a focused Material interface and an extensible plugin system.',
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
    gallery: 'The real Waywallen interface',
    galleryBody:
      'Manage wallpapers, displays and renderer health without leaving the app.',
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
      'The third-party open-wallpaper-engine plugin adds Scene and Web wallpaper support.',
    ],
    [
      'Discover with Wallhaven',
      'The official Wallhaven plugin brings remote wallpaper discovery into Waywallen.',
    ],
    [
      'Plugin architecture',
      'Install official and third-party wallpaper renderers from the app’s plugin page.',
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
    ['Image plugin', 'Official renderer for image wallpapers.'],
    [
      'Video plugin',
      'Official video renderer with Vulkan and VA-API hardware decoding.',
    ],
    [
      'Wallhaven plugin',
      'Official integration for discovering wallpapers from Wallhaven.',
    ],
    [
      'open-wallpaper-engine',
      'Third-party plugin providing Wallpaper Engine Scene and Web support.',
    ],
  ],
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
      'Install and use the third-party renderer.',
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
      "Flatpak media metadata: grant --talk-name='org.mpris.MediaPlayer2.*' to org.waywallen.waywallen.",
      'Logs: stop the daemon, then run Waywallen with RSTD_LOG=debug and RUST_LOG=debug,zbus=warn.',
    ],
  },
  faq: [
    [
      'How does hardware video decoding work?',
      'The default auto mode tries Vulkan, then VA-API, then software decoding. You can choose hwdec in the waywallen-video settings.',
    ],
    [
      'Does Waywallen support Wallpaper Engine wallpapers?',
      'Yes, through the third-party open-wallpaper-engine plugin, which provides Scene and Web support.',
    ],
    [
      'How do I install a third-party plugin?',
      'Download its ZIP archive and install it from the Plugins page. Waywallen will then notify you about plugin updates.',
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
      description:
        'Настоящий интерфейс Waywallen: обои, дисплеи и состояние системы.',
    },
    plugins: {
      title: 'Плагины',
      description:
        'Расширяйте Waywallen официальными плагинами и open-wallpaper-engine.',
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
      title: 'Интеграция с рабочим столом',
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
    title: 'Ваш рабочий стол — в движении.',
    body: 'Waywallen добавляет динамические обои в Linux: нативная интеграция, лаконичный Material-интерфейс и расширяемая система плагинов.',
    download: 'Скачать Waywallen',
    github: 'Открыть GitHub',
  },
  sections: {
    highlights: 'Создан для динамичного рабочего стола',
    highlightsBody:
      'Изображения, видео и сторонние интеграции в одной библиотеке.',
    desktops: 'Работает в вашем окружении',
    desktopsBody:
      'Интеграции подключают вывод Waywallen к популярным оболочкам Linux.',
    gallery: 'Настоящий интерфейс Waywallen',
    galleryBody: 'Управляйте обоями, дисплеями и состоянием рендереров.',
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
      'Сторонний open-wallpaper-engine добавляет Scene и Web обои.',
    ],
    [
      'Поиск в Wallhaven',
      'Официальный плагин добавляет поиск удалённых обоев.',
    ],
    [
      'Система плагинов',
      'Устанавливайте официальные и сторонние рендереры из приложения.',
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
    ['Плагин изображений', 'Официальный рендерер изображений.'],
    ['Плагин видео', 'Vulkan и VA-API аппаратное декодирование.'],
    ['Плагин Wallhaven', 'Официальная интеграция поиска обоев.'],
    [
      'open-wallpaper-engine',
      'Сторонний плагин для Wallpaper Engine Scene и Web.',
    ],
  ],
  docsCards: [
    ['Установка', 'AppImage, Flatpak и сборка.', 'docs/installation'],
    [
      'Интеграция',
      'KDE Plasma, GNOME и layer-shell.',
      'docs/desktop-integration',
    ],
    [
      'Wallpaper Engine',
      'Установка стороннего рендерера.',
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
      "Метаданные плеера во Flatpak: выдайте org.waywallen.waywallen разрешение --talk-name='org.mpris.MediaPlayer2.*'.",
      'Логи: остановите демон и запустите Waywallen с RSTD_LOG=debug и RUST_LOG=debug,zbus=warn.',
    ],
  },
  faq: [
    [
      'Как работает аппаратное декодирование видео?',
      'Режим auto пробует Vulkan, затем VA-API и программное декодирование. В настройках waywallen-video можно выбрать hwdec.',
    ],
    [
      'Поддерживаются ли обои Wallpaper Engine?',
      'Да, через сторонний плагин open-wallpaper-engine с поддержкой Scene и Web.',
    ],
    [
      'Как установить сторонний плагин?',
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
      description: '使用官方插件和 open-wallpaper-engine 扩展 Waywallen。',
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
    body: 'Waywallen 为 Linux 带来动态壁纸、原生桌面集成、简洁的 Material 界面和可扩展插件系统。',
    download: '下载 Waywallen',
    github: '在 GitHub 查看',
  },
  sections: {
    highlights: '为动态桌面而生',
    highlightsBody: '图片、视频和社区集成都在同一个壁纸库中。',
    desktops: '融入你的桌面',
    desktopsBody: '专用集成将 Waywallen 输出连接到常见 Linux 桌面。',
    gallery: '真实的 Waywallen 界面',
    galleryBody: '在应用中管理壁纸、显示器和渲染器状态。',
    explore: '探索 Waywallen',
  },
  featureText: [
    ['动态壁纸', '在同一个壁纸库中整理和显示图片与视频。'],
    ['硬件视频解码', '视频插件支持 Vulkan、VA-API 和软件回退。'],
    [
      'Wallpaper Engine 兼容',
      'open-wallpaper-engine 插件添加 Scene 和 Web 支持。',
    ],
    ['Wallhaven 浏览', '官方插件将远程壁纸发现带入 Waywallen。'],
    ['插件架构', '从应用插件页安装官方和第三方渲染器。'],
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
    ['图片插件', '官方图片壁纸渲染器。'],
    ['视频插件', '支持 Vulkan 和 VA-API 硬件解码。'],
    ['Wallhaven 插件', '用于发现 Wallhaven 壁纸的官方集成。'],
    [
      'open-wallpaper-engine',
      '提供 Wallpaper Engine Scene 和 Web 的第三方插件。',
    ],
  ],
  docsCards: [
    ['安装', 'AppImage、Flatpak 和源码构建。', 'docs/installation'],
    [
      '桌面集成',
      'KDE Plasma、GNOME 和 layer-shell。',
      'docs/desktop-integration',
    ],
    ['Wallpaper Engine', '安装并使用第三方渲染器。', 'docs/wallpaper-engine'],
    ['故障排除', 'NVIDIA、Flatpak、日志和调试。', 'docs/troubleshooting'],
  ],
  integration: {
    desktop: '桌面',
    integration: '集成',
    mouse: '鼠标输入',
    pause: '自动暂停',
    yes: '支持',
    no: '不支持',
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
      "Flatpak 媒体信息：为 org.waywallen.waywallen 授予 --talk-name='org.mpris.MediaPlayer2.*'。",
      '日志：停止守护进程，然后使用 RSTD_LOG=debug 和 RUST_LOG=debug,zbus=warn 启动。',
    ],
  },
  faq: [
    [
      '硬件视频解码如何工作？',
      '默认 auto 模式依次尝试 Vulkan、VA-API 和软件解码，也可在 waywallen-video 设置中选择 hwdec。',
    ],
    [
      '是否支持 Wallpaper Engine 壁纸？',
      '支持。第三方 open-wallpaper-engine 插件提供 Scene 和 Web 支持。',
    ],
    [
      '如何安装第三方插件？',
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
