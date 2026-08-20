import type { Copy } from '../types';
import { en } from './en';

export const zh: Copy = {
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
  contributors: {
    title: '贡献者',
    description: '每一份代码、修复和想法都在推动 Waywallen 前进。',
    lead: '项目开发者',
    leadBody: 'Waywallen 的创建者和主要开发者。',
    community: '社区贡献者',
    contributionForms: ['次贡献', '次贡献', '次贡献'],
    action: '为 Waywallen 做贡献',
    github: '在 GitHub 查看完整贡献图',
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
    contributors: {
      title: '贡献者',
      description: '认识开发、改进和支持 Waywallen 项目的人们。',
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
