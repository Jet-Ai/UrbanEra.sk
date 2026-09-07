'use client';
import { useLanguage } from '@/components/language-provider';
import LanguageSwitcher from '@/components/language-switcher';
import ContactSection from '@/components/contact-section';

import { ArrowUpRight } from 'lucide-react';
import Portfolio from '@/app/portfolio/portfolio';
import { DRIVE_ROOT } from '@/lib/portfolio-data';



export default function PortfolioPage() {
  const {localize}=useLanguage();
  return localize(<>
    <a className="skip-link" href="#portfolio-content">Preskočiť na obsah</a>
    <header id="top" className="site-header">
      <a href="/" className="wordmark" aria-label="UrbanEra — úvod">urbanera<span className="brand-dot">.</span></a>
      <nav aria-label="Hlavná navigácia"><a href="/">O spoločnosti</a><a href="#work">Portfólio</a><a href="#media-section">Videá a PDF</a><a href="#kontakt">Kontakt</a></nav>
      <a className="header-link" href={DRIVE_ROOT} target="_blank" rel="noreferrer">Kompletný archív <ArrowUpRight size={18}/></a>
    </header><LanguageSwitcher/>
    <main id="portfolio-content"><section className="original-portfolio"><a className="text-link" href="https://urbanera-sro.netlify.app/#work" target="_blank" rel="noreferrer">Pôvodné portfólio ↗</a><details><summary>UrbanEra — Netlify</summary><iframe src="https://urbanera-sro.netlify.app/" title="UrbanEra — Netlify" loading="lazy" referrerPolicy="no-referrer" /></details></section><Portfolio /><ContactSection/></main>
    <footer><a className="wordmark" href="/">urbanera<span className="brand-dot">.</span></a><p>Nehnuteľnosti. Development. Výstavba. Interiéry.</p><a href="https://urbanera-sro.netlify.app/#top" target="_blank" rel="noreferrer">Pôvodné portfólio ↗</a></footer>
  </>);
}

