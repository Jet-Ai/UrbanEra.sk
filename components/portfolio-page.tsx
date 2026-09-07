'use client';
import { useLanguage } from '@/components/language-provider';
import LanguageSwitcher from '@/components/language-switcher';
import ContactSection from '@/components/contact-section';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Portfolio from '@/app/portfolio/portfolio';
import { DRIVE_ROOT } from '@/lib/portfolio-data';



export default function PortfolioPage() {
  const {localize}=useLanguage();
  return localize(<>
    <a className="skip-link" href="#portfolio-content">Preskočiť na obsah</a>
    <header id="top" className="site-header">
      <Link href="/" className="wordmark" aria-label="UrbanEra — úvod">urbanera<span className="brand-dot">.</span></Link>
      <nav aria-label="Hlavná navigácia"><Link href="/">O spoločnosti</Link><a href="#work">Portfólio</a><a href="#media-section">Videá a PDF</a><a href="#kontakt">Kontakt</a></nav>
      <a className="header-link" href={DRIVE_ROOT} target="_blank" rel="noreferrer">Kompletný archív <ArrowUpRight size={18}/></a>
    </header><LanguageSwitcher/>
    <main id="portfolio-content"><Portfolio /><ContactSection/></main>
    <footer><Link className="wordmark" href="/">urbanera<span className="brand-dot">.</span></Link><p>Nehnuteľnosti. Development. Výstavba. Interiéry.</p><a href="https://urbanera-sro.netlify.app/#top" target="_blank" rel="noreferrer">Pôvodné portfólio ↗</a></footer>
  </>);
}

