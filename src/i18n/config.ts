export const locales = ['en', 'ru', 'zh-cn'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  'zh-cn': '简体中文',
};

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  'zh-cn': 'zh-CN',
};

export const routeSlugs = [
  '',
  'features',
  'download',
  'screenshots',
  'plugins',
  'docs',
  'docs/installation',
  'docs/desktop-integration',
  'docs/wallpaper-engine',
  'docs/troubleshooting',
  'faq',
] as const;

export type RouteSlug = (typeof routeSlugs)[number];

export function route(locale: Locale, slug: string = ''): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${prefix}/${slug}${slug ? '/' : ''}`.replace(/\/+/g, '/');
}

export function localizedPath(pathname: string, locale: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'ru' || parts[0] === 'zh-cn') parts.shift();
  return route(locale, parts.join('/'));
}
