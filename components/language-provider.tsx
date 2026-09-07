'use client';
import { Children, createContext, useContext, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react';
import translations from '@/lib/translations.json';
import { type Locale, localePath } from '@/lib/locales';
import { DirectionProvider } from '@/components/ui/direction';

const LanguageContext = createContext<Locale>('sk');
const dictionary = translations as Record<string, Record<string,string>>;
export function LanguageProvider({locale,children}:{locale:Locale;children:ReactNode}) {
  return <LanguageContext.Provider value={locale}><DirectionProvider direction={locale==='ar'?'rtl':'ltr'}>{children}</DirectionProvider></LanguageContext.Provider>;
}
export function translate(text:string,locale:Locale):string {
  if(locale==='sk') return text;
  const key=text.trim().replace(/\s+/g,' ');
  const direct=dictionary[key]?.[locale];
  if(direct) return text.replace(text.trim(),direct);
  // Dynamic image labels combine the same translated room names with numbers.
  if(/^(Dom 0|Prezrieť Dom 0|Zväčšiť: Dom 0|UrbanEra — koncept|Realizácia interiéru|Realizácia ·)/.test(key)){
    let result=key;
    for(const part of Object.keys(dictionary).sort((a,b)=>b.length-a.length)){
      if(result.includes(part)) result=result.split(part).join(dictionary[part][locale]||part);
    }
    return result;
  }
  return text;
}
export function useLanguage() {
  const locale=useContext(LanguageContext);
  const t=(text:string)=>translate(text,locale);
  function localize(node:ReactNode):ReactNode {
    if(typeof node==='string')return t(node);
    if(Array.isArray(node))return Children.map(node,localize);
    if(!isValidElement(node))return node;
    const element=node as ReactElement<Record<string,unknown>>;
    const props:Record<string,unknown>={};
    for(const key of ['alt','aria-label','title','label']) {
      if(typeof element.props[key]==='string')props[key]=t(element.props[key] as string);
    }
    const href=element.props.href;
    if(href==='/portfolio')props.href=localePath(locale,true);
    if(href==='/')props.href=localePath(locale);
    if(element.props.children!==undefined)props.children=localize(element.props.children as ReactNode);
    return cloneElement(element,props);
  }
  return {locale,t,localize};
}
