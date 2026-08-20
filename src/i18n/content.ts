import type { Locale } from './config';
import { en } from './translations/en';
import { ru } from './translations/ru';
import { zh } from './translations/zh-cn';
import type { Copy } from './types';

export const content: Record<Locale, Copy> = { en, ru, 'zh-cn': zh };
