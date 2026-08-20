import type { RouteSlug } from './config';

export type Copy = {
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
  contributors: {
    title: string;
    description: string;
    lead: string;
    leadBody: string;
    community: string;
    contributionForms: [string, string, string];
    action: string;
    github: string;
  };
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
