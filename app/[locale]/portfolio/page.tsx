import PortfolioPage from '@/components/portfolio-page';
import { isLocale } from '@/lib/locales';
import { siteMetadata } from '@/lib/site-metadata';
import { notFound } from 'next/navigation';
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale))notFound();
  return siteMetadata(locale,true);
}
export default function Page(){return <PortfolioPage/>;}
