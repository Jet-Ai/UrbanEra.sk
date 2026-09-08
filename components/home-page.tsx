'use client';
import { useLanguage } from '@/components/language-provider';
import LanguageSwitcher from '@/components/language-switcher';
import ContactSection from '@/components/contact-section';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Building2, Layers3, MoveUpRight } from 'lucide-react';

const services = [
  { number: '01', title: 'Nehnuteľnosti', text: 'Priestor pre nové bývanie, podnikanie aj ďalší rozvoj. Každá nehnuteľnosť začína pochopením jej potenciálu.', icon: Building2 },
  { number: '02', title: 'Development', text: 'Od prvého zámeru k ucelenému projektu. Architektúra, funkčnosť a vzťah k okoliu v jednom celku.', icon: Layers3 },
  { number: '03', title: 'Výstavba', text: 'Premena plánov na skutočný priestor. S dôrazom na premyslené riešenia, materiály a každý detail.', icon: MoveUpRight },
];

export default function Home() {
  const {localize}=useLanguage();
  return localize(
    <>
      <a className="skip-link" href="#obsah">Preskočiť na obsah</a>
      <header id="top" className="site-header">
        <a className="wordmark" href="#top" aria-label="UrbanEra — úvod">urbanera<span className="brand-dot">.</span></a>
        <nav aria-label="Hlavná navigácia">
          <a href="#o-nas">O nás</a><a href="#zameranie">Naše zameranie</a><a href="/portfolio">Portfólio</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-link" href="/portfolio">Prezrieť projekty <ArrowUpRight size={18} /></a>
      </header><LanguageSwitcher/>
      <main id="obsah">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow"><span className="little-line" /> NEHNUTEĽNOSTI · DEVELOPMENT · VÝSTAVBA</div>
            <h1 id="hero-heading">Nová éra<br />priestoru<span className="green-dot">.</span></h1><div className="hero-actions"><a className="primary-action" href="/portfolio">Prezrieť projekty <ArrowUpRight size={18}/></a><a className="text-link" href="#kontakt">Kontakt <ArrowUpRight size={18}/></a></div>
            <div className="hero-bottom"><p>Za každým priestorom vidíme príležitosť.<br />Pre lepšie bývanie. Pre nové začiatky.</p><a className="round-link" href="#o-nas" aria-label="Spoznajte UrbanEra"><ArrowDown size={24} /></a></div>
          </div>
          <figure className="hero-figure"><Image unoptimized width={1672} height={941} src="/architecture.webp" alt="Architektonický koncept súčasného bývania s priestrannými balkónmi a zeleným vnútroblokom" fetchPriority="high" /><figcaption>PRIESTOR PRE ZAJTRA <span>Ilustračný architektonický koncept</span></figcaption><div className="image-index" aria-hidden="true">U / E</div></figure>
        </section>
        <section id="o-nas" className="intro section-grid">
          <div className="section-label"><span>01 /</span> O SPOLOČNOSTI</div>
          <div><h2>Priestor má potenciál.<br /><span>My v ňom vidíme budúcnosť.</span></h2><div className="intro-columns"><p>UrbanEra spája svet nehnuteľností, developmentu a výstavby. Na priestor sa pozeráme v súvislostiach — od jeho miesta v okolí až po každodenný život v ňom.</p><p>Veríme v zmysluplné využitie územia, premyslenú architektúru a riešenia, ktoré majú hodnotu aj s odstupom času.</p></div></div>
        </section>
        <section id="zameranie" className="services">
          <div className="section-top"><div className="section-label"><span>02 /</span> NAŠE ZAMERANIE</div><h2>Od príležitosti<br />k realizácii.</h2><p>Tri oblasti.<br />Jeden ucelený pohľad.</p></div>
          <div className="service-grid">{services.map(({number,title,text,icon:Icon})=><article key={number} className="service-card"><div className="service-top"><span>{number}</span><Icon size={28} strokeWidth={1.25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="portfolio-feature"><div><div className="section-label"><span>03 /</span> PORTFÓLIO INTERIÉROV</div><h2>Veľké predstavy.<br />Premyslené detaily.</h2><p>Päť rezidenčných konceptov. Osemdesiat vizualizácií.<br />Objavte naše interiéry od prvého pohľadu po posledný detail.</p><a className="text-link" href="/portfolio">Objaviť portfólio <ArrowUpRight size={20}/></a></div><a href="/portfolio" aria-label="Prezrieť portfólio interiérov"><Image unoptimized width={1200} height={900} src="https://drive.google.com/thumbnail?id=1eHfDIe2n3JgI8Jy8VEK5mZR8kJ2JGuaS&sz=w1400" alt="UrbanEra — koncept vstupnej haly z portfólia Dom 01" loading="lazy" referrerPolicy="no-referrer"/></a></section><section id="pristup" className="approach section-grid">
          <div className="section-label"><span>04 /</span> NÁŠ PRÍSTUP</div>
          <div><h2>Dobré projekty začínajú<br />správnymi otázkami.</h2><div className="principles"><article><span>01</span><div><h3>Miesto a jeho možnosti</h3><p>Čo lokalita potrebuje? Aký priestor tu dáva zmysel? Začíname kontextom, aby návrh prirodzene zapadol do svojho okolia.</p></div></article><article><span>02</span><div><h3>Premyslený celok</h3><p>Prepájame architektonický zámer s praktickým využitím. Dispozícia, materiály aj detaily musia fungovať spoločne.</p></div></article><article><span>03</span><div><h3>Hodnota do budúcnosti</h3><p>Pozeráme sa za horizont dokončenia stavby. Na to, ako sa bude priestor používať, udržiavať a meniť v čase.</p></div></article></div></div>
        </section>
        <section className="closing"><p>URBANERA.SK</p><h2>Budúcnosť má<br />svoje miesto<span>.</span></h2><a href="#top" className="closing-link">Späť na začiatok <ArrowUpRight size={24}/></a></section>
      <ContactSection/></main>
      <footer><a className="wordmark" href="#top">urbanera<span className="brand-dot">.</span></a><p>Nehnuteľnosti. Development. Výstavba.</p><span>© {new Date().getFullYear()} UrbanEra s.r.o.</span></footer>
    </>
  );
}


