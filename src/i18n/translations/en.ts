import type { Copy } from '../types';

export const en: Copy = {
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
  contributors: {
    title: 'Contributors',
    description:
      'Waywallen is shaped by everyone who contributes code, fixes and ideas.',
    lead: 'Project developer',
    leadBody: 'Creator and lead developer of Waywallen.',
    community: 'Community contributors',
    contributionForms: ['contribution', 'contributions', 'contributions'],
    action: 'Contribute to Waywallen',
    github: 'View the complete graph on GitHub',
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
    contributors: {
      title: 'Contributors',
      description:
        'Meet the people who build, improve and support the Waywallen project.',
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
