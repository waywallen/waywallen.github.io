const github = 'https://github.com';
const githubApi = 'https://api.github.com';
const organization = `${github}/waywallen`;

export const assets = {
  favicon: '/favicon.svg',
  logo: '/images/logo/waywallen.svg',
  socialImage: '/images/social/waywallen-og.svg',
  screenshots: [
    { src: '/images/screenshots/main-page.webp', width: 885, height: 643 },
    {
      src: '/images/screenshots/displays-page.webp',
      width: 1771,
      height: 1280,
    },
    {
      src: '/images/screenshots/status-page.webp',
      width: 1770,
      height: 1279,
    },
  ],
} as const;

export const links = {
  repository: `${organization}/waywallen`,
  releases: `${organization}/waywallen/releases/latest`,
  buildGuide: `${organization}/waywallen/blob/main/BUILD.md`,
  contribute: `${organization}/waywallen/compare`,
  issues: `${organization}/waywallen/issues`,
  contributors: `${organization}/waywallen/graphs/contributors`,
  contributorsApi: `${githubApi}/repos/waywallen/waywallen/contributors?per_page=100&anon=1`,
  display: `${organization}/waywallen-display`,
  layerShell: `${organization}/waywallen-display/tree/main/src/bin/layer_shell`,
  wallpaperEngine: `${organization}/open-wallpaper-engine`,
  wallpaperEngineReleases: `${organization}/open-wallpaper-engine/releases/latest`,
  developer: `${github}/hypengw`,
  websiteAuthor: `${github}/CatSema`,
  sponsor: 'https://ko-fi.com/hypengw',
  flatpak: 'https://flathub.org/apps/org.waywallen.waywallen',
  discord: 'https://discord.gg/2xEdmMrhRF',
} as const;

export const githubProfile = (login: string) => `${github}/${login}`;
export const githubAvatar = (id: number) =>
  `https://avatars.githubusercontent.com/u/${id}?v=4`;
