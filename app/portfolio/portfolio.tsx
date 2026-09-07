/* oxlint-disable jsx-a11y/media-has-caption -- Original portfolio videos are preserved as supplied; no caption tracks were provided. */
'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Expand, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { projects, DRIVE_ROOT } from '@/lib/portfolio-data';

const roomLabels: Record<string,string> = { 'Entrance Hall':'Vstupná hala', 'Master Bedroom':'Hlavná spálňa', Kitchen:'Kuchyňa', "Kids' Room":'Detská izba', "Boy's Room":'Chlapčenská izba', Bathroom:'Kúpeľňa', 'Living Room':'Obývacia izba', Hallway:'Chodba', "Children's Room":'Detská izba', 'Bedroom 01':'Spálňa 01', 'Bedroom 02':'Spálňa 02' };
const descriptions = [
  'Ucelený koncept bývania so vstupnou halou, hlavnou spálňou, kuchyňou a detskou izbou.',
  'Rodinné bývanie s výraznou obývacou izbou, dvoma spálňami a premyslenými detailmi kúpeľne.',
  'Svetlé priestory prepájajúce chodbu, kuchyňu, detskú izbu a kúpeľňu.',
  'Dve odlišné spálne, obývacia izba a kúpeľňa v jednom rezidenčnom koncepte.',
  'Varianty vstupnej haly, hlavnej spálne, kuchyne a detskej izby pre súčasné bývanie.',
];
const thumbnail = (id:string, size=900) => 'https://drive.google.com/thumbnail?id='+id+'&sz=w'+size;
const original = (id:string) => 'https://drive.google.com/file/d/'+id+'/view';
const items = projects.flatMap((project,p) => project.rooms.flatMap(room => room.images.map((id,i)=>({id,project:p,room:roomLabels[room.name]||room.name,label:'Dom 0'+(p+1)+' · '+(roomLabels[room.name]||room.name)+' · '+(i+1)}))));
const videos = [
  {title:'Obývacia izba a kuchyňa', description:'Otvorená dispozícia, parkety so vzorom rybej kosti, kuchyňa na mieru a akcentové osvetlenie.'},
  {title:'Spálňa a šatník', description:'Detailný pohľad na obklady, osvetlené zrkadlá a vstavané úložné priestory.'},
  {title:'Kúpeľňa v detailoch', description:'Textúry obkladov, armatúry a umývadlová zostava na mieru.'},
  {title:'Vstupná hala', description:'Zrkadlové plochy, lamely a kamenná dlažba v priestore prvého dojmu.'},
];
const constructionPhotos = [1, 8, 15, 20, 28, 35, 43, 48, 55, 60, 64, 66];

function PortfolioImage({id,label,large=false}:{id:string;label:string;large?:boolean}) {
  const {localize}=useLanguage();
  const [failed,setFailed] = useState(false);
  return localize(failed ? <span className="media-unavailable">Náhľad nie je dostupný.<br/>Originál nájdete v archíve.</span> : <Image unoptimized src={thumbnail(id,large?2200:900)} width={1400} height={1000} alt={label} loading="lazy" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>);
}

export default function Portfolio() {
  const {localize,locale}=useLanguage();
  const [selected,setSelected] = useState(0);
  const [open,setOpen] = useState(false);
  const [video,setVideo] = useState(0);
  const current = items[selected];
  const move = (step:number)=>setSelected(index=>(index+step+items.length)%items.length);
  return localize(<>
    <section className="portfolio-heading" id="work">
      <div className="eyebrow"><span className="little-line"/> PORTFÓLIO / REZIDENČNÉ INTERIÉRY</div>
      <div className="portfolio-title-row"><h1>Priestor.<br/>Do posledného detailu<span className="green-dot">.</span></h1><p>Päť domov. Rôzne pohľady na bývanie.<br/>Objavte miestnosti, materiály a atmosféru našich interiérových konceptov.</p></div>
      <div className="portfolio-counts"><span><strong>05</strong> domov</span><span><strong>20</strong> miestností</span><span><strong>80</strong> vizualizácií</span><a href="#media-section">Videoprehliadky <ArrowUpRight size={18}/></a></div>
    </section>
    <section className="portfolio-browser" aria-label="Galéria projektov">
      <Dialog open={open} onOpenChange={setOpen}>
        <div className="native-projects">{projects.map((project,p)=><details className="native-project" key={project.id}>
          <summary>
            <span className="project-cover"><PortfolioImage id={project.rooms[0].images[0]} label={'Dom 0'+(p+1)+' — interiérový koncept'}/></span>
            <span className="project-card-heading"><strong>Dom 0{p+1}</strong><span>04 miestnosti / 16 vizualizácií</span></span>
            <span className="project-open">Prezrieť projekt <ArrowRight size={18}/></span>
          </summary>
          <div className="project-detail-heading"><p>{descriptions[p]}</p><a className="text-link" href={'https://drive.google.com/drive/folders/'+project.id} target="_blank" rel="noreferrer">Priečinok projektu <ArrowUpRight size={18}/></a></div>
          {project.rooms.map(room=><section className="room-section" key={room.name}><h3>{roomLabels[room.name]||room.name}<span>04 pohľady</span></h3><div className="room-gallery">{room.images.map((id,i)=><DialogTrigger key={id} className="room-image" onClick={()=>setSelected(items.findIndex(item=>item.id===id))} aria-label={'Zväčšiť: Dom 0'+(p+1)+' — '+(roomLabels[room.name]||room.name)+' '+(i+1)}><PortfolioImage id={id} label={'Dom 0'+(p+1)+' — '+(roomLabels[room.name]||room.name)+' '+(i+1)}/><span><Expand size={18}/></span></DialogTrigger>)}</div></section>)}
        </details>)}</div>
          <DialogContent className="portfolio-lightbox" showCloseButton={false} onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();move(locale==='ar'?-1:1);}if(event.key==='ArrowLeft'){event.preventDefault();move(locale==='ar'?1:-1);}}}>
            <div className="lightbox-top"><DialogTitle>{current.label}</DialogTitle><DialogClose className="lightbox-close" aria-label="Zavrieť galériu"><X size={24}/></DialogClose></div>
            <DialogDescription className="sr-only">Vizualizácia interiéru. Ďalšie zábery zobrazíte šípkami; Escape zatvorí galériu.</DialogDescription>
            <div className="lightbox-image"><PortfolioImage key={current.id} id={current.id} label={current.label} large/></div>
            <div className="lightbox-bottom"><Button variant="outline" onClick={()=>move(-1)} aria-label="Predchádzajúca vizualizácia"><ArrowLeft/></Button><span aria-live="polite">{selected+1} / {items.length}</span><a href={original(current.id)} target="_blank" rel="noreferrer">Otvoriť originál ↗</a><Button variant="outline" onClick={()=>move(1)} aria-label="Nasledujúca vizualizácia"><ArrowRight/></Button></div>
          </DialogContent>
        </Dialog>
    </section>
    <section className="portfolio-media" id="media-section">
      <div className="section-top"><div className="section-label"><span>02 /</span> V POHYBE</div><h2>Prejdite sa<br/>interiérom.</h2><p>Materiály a detaily<br/>zblízka.</p></div>
      <Tabs value={String(video)} onValueChange={value=>setVideo(Number(value))}>
        <TabsList className="video-tabs" aria-label="Vyberte video">{videos.map((v,i)=><TabsTrigger key={v.title} value={String(i)}>0{i+1} / {v.title}</TabsTrigger>)}</TabsList>
        {videos.map((v,i)=><TabsContent key={v.title} value={String(i)}><div className="portfolio-video"><video key={i} controls playsInline preload="metadata" aria-label={v.title}><source src={'/portfolio/Video'+(i+1)+'.mp4'} type="video/mp4"/>Váš prehliadač nepodporuje prehrávanie videa.</video><div><span className="eyebrow">VIDEO / 0{i+1}</span><h3>{v.title}</h3><p>{v.description}</p><a className="text-link" href={'/portfolio/Video'+(i+1)+'.mp4'} target="_blank" rel="noreferrer">Otvoriť video <ArrowUpRight size={18}/></a></div></div></TabsContent>)}
      </Tabs>
      <div className="portfolio-docs"><a href="https://drive.google.com/drive/folders/150IjhZIHhFLi29w72Qu38G2ZzvfwsBpR?usp=sharing" target="_blank" rel="noreferrer"><FileText size={24}/><span>Projektová dokumentácia<small>PDF a podklady k projektom</small></span><ArrowUpRight/></a><a href="https://drive.google.com/drive/folders/1uGOILAJFAeLLFoVB-ccqSZP9YC_rc9S9" target="_blank" rel="noreferrer"><FileText size={24}/><span>Realizované projekty<small>Archív pôvodného portfólia</small></span><ArrowUpRight/></a></div>
    </section>
    <section className="portfolio-archive" id="contact"><div><div className="eyebrow">KOMPLETNÉ PORTFÓLIO</div><h2>Každý detail na jednom mieste.</h2><p>Prezrite si pôvodné súbory, ďalšie pohľady a projektové podklady v archíve UrbanEra.</p></div><a className="text-link" href={DRIVE_ROOT} target="_blank" rel="noreferrer">Otvoriť archív <ArrowUpRight/></a></section>
    <section className="construction-case" id="realization">
      <div className="section-top"><div className="section-label"><span>03 /</span> Z REALIZÁCIE</div><h2>Od prvého kroku<br/>po hotový detail.</h2><p>Dokumentácia priebehu<br/>výstavby a montáže.</p></div>
      <div className="construction-intro"><p>Výber fotografií z realizácie zachytáva prácu priamo na stavbe — od prípravy priestorov a inštalácií až po podlahové a povrchové detaily. Fotografie slúžia ako autentický doplnok k vizualizáciám interiérov.</p><span>REALIZÁCIA / 2025</span></div>
      <div className="construction-grid">{constructionPhotos.map((photo,index)=><figure key={photo} className={index===0 || index===5 ? 'construction-photo construction-photo-wide' : 'construction-photo'}><Image unoptimized src={`/portfolio/realization/photo-${String(photo).padStart(2,'0')}.jpeg`} width={768} height={1024} alt={`Realizácia interiéru — fotografia ${index+1}`} loading="lazy"/><figcaption>Realizácia · {String(index+1).padStart(2,'0')}</figcaption></figure>)}</div>
    </section>
  </>);
}


