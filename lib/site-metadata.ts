import type { Metadata } from 'next';
import { locales, type Locale, localePath } from './locales';
const titles:Record<Locale,[string,string]> = {
  sk:['Nehnuteľnosti, development a výstavba','Portfólio interiérov'],
  en:['Real estate, development and construction','Interior portfolio'],
  tr:['Gayrimenkul, proje geliştirme ve inşaat','İç mekân portföyü'],
  ru:['Недвижимость, девелопмент и строительство','Портфолио интерьеров'],
  az:['Daşınmaz əmlak, layihə inkişafı və tikinti','İnteryer portfoliosu'],
  ar:['العقارات والتطوير العقاري والبناء','أعمال التصميم الداخلي'],
};
export function siteMetadata(locale:Locale,portfolio=false):Metadata {
  const title=titles[locale][portfolio?1:0];
  return {
    metadataBase:new URL('https://urbanera-sk.jet-a1.chatgpt.site'),
    title:title+' | UrbanEra s.r.o.',
    description:title+' — UrbanEra s.r.o. · +421 908 375 787 · urbanera@proton.me',
    alternates:{canonical:localePath(locale,portfolio),languages:Object.fromEntries([...locales.map(code=>[code,localePath(code,portfolio)]),['x-default',localePath('sk',portfolio)]])},
    openGraph:{title:title+' | UrbanEra s.r.o.',locale:{sk:'sk_SK',en:'en_GB',tr:'tr_TR',ru:'ru_RU',az:'az_AZ',ar:'ar_AR'}[locale],url:localePath(locale,portfolio),type:'website'},
  };
}
