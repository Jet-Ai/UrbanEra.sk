'use client';
import { Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './language-provider';
export default function ContactSection(){
  const {localize}=useLanguage();
  return localize(<section className="contact-section" id="kontakt" aria-labelledby="contact-heading"><div><div className="eyebrow">KONTAKT</div><h2 id="contact-heading">Poďme sa porozprávať<br/>o vašom projekte.</h2><p>UrbanEra s.r.o.</p><p>Napíšte nám o svojej nehnuteľnosti, predstave alebo pripravovanom projekte.</p></div><div className="contact-links"><a href="tel:+421908375787"><Phone size={22}/><span><small>Telefón</small><bdi dir="ltr">+421 908 375 787</bdi></span><ArrowUpRight size={22}/></a><a href="https://wa.me/421908375787" target="_blank" rel="noreferrer"><MessageCircle size={22}/><span><small>WhatsApp</small>Napíšte nám na WhatsApp</span><ArrowUpRight size={22}/></a><a href="mailto:urbanera@proton.me"><Mail size={22}/><span><small>E-mail</small><bdi dir="ltr">urbanera@proton.me</bdi></span><ArrowUpRight size={22}/></a></div></section>);
}
