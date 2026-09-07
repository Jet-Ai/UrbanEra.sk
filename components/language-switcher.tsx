'use client';
import { usePathname } from 'next/navigation';
import { locales, languageNames, localePath } from '@/lib/locales';
import { useLanguage } from './language-provider';
export default function LanguageSwitcher(){
  const {locale,t}=useLanguage();
  const pathname=usePathname();
  return <div className="language-bar"><span>UrbanEra s.r.o.</span><nav aria-label={t('Jazyk stránky')} dir="ltr">{locales.map(code=><a key={code} href={localePath(code,pathname.includes('/portfolio'))} hrefLang={code} lang={code} title={languageNames[code]} aria-label={languageNames[code]} aria-current={locale===code?'page':undefined}>{code.toUpperCase()}</a>)}</nav></div>;
}
