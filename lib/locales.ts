export const locales = ['sk', 'en', 'tr', 'ru', 'az', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const languageNames: Record<Locale, string> = {sk:'Slovenčina',en:'English',tr:'Türkçe',ru:'Русский',az:'Azərbaycanca',ar:'العربية'};
export function localePath(locale: Locale, portfolio = false) {
  return (locale === 'sk' ? '' : '/'+locale) + (portfolio ? '/portfolio' : locale==='sk'?'/':'') ;
}
