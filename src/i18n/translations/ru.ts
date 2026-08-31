import type { Copy } from '../types';
import { en } from './en';

export const ru: Copy = {
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
  contributors: {
    title: 'Участники',
    description:
      'Waywallen развивается благодаря всем, кто вносит код, исправления и идеи.',
    lead: 'Разработчик проекта',
    leadBody: 'Создатель и ведущий разработчик Waywallen.',
    community: 'Участники сообщества',
    contributionForms: ['вклад', 'вклада', 'вкладов'],
    action: 'Внести вклад в Waywallen',
    github: 'Полный граф участников на GitHub',
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
    contributors: {
      title: 'Участники',
      description:
        'Люди, которые разрабатывают, улучшают и поддерживают Waywallen.',
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
