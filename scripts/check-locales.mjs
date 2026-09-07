import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const dictionary=JSON.parse(await readFile('lib/translations.json','utf8'));
const locales=['sk','en','tr','ru','az','ar'];
for(const [key,entry] of Object.entries(dictionary))for(const locale of locales.slice(1))assert.ok(entry[locale],key+' missing '+locale);
const results=[];
const baseUrl=process.env.URBANERA_TEST_URL||'http://localhost:3000';
for(const locale of locales){
 for(const portfolio of [false,true]){
  const path=(locale==='sk'?'':'/'+locale)+(portfolio?'/portfolio':locale==='sk'?'/':'');
  const response=await fetch(baseUrl+path);
  const html=await response.text();
  assert.equal(response.status,200,path);
  assert.ok(html.includes('<html lang="'+locale+'" dir="'+(locale==='ar'?'rtl':'ltr')+'"'),path+' language/direction');
  for(const link of ['tel:+421908375787','https://wa.me/421908375787','mailto:urbanera@proton.me'])assert.ok(html.includes('href="'+link+'"'),path+' '+link);
  assert.ok(html.includes('UrbanEra s.r.o.'),path+' company');
  assert.ok(html.includes('dir="ltr">+421 908 375 787'),path+' phone direction');
  for(const next of locales){
   const href=(next==='sk'?'':'/'+next)+(portfolio?'/portfolio':next==='sk'?'/':'');
   assert.ok(html.includes('href="'+href+'" hrefLang="'+next+'"')||html.includes('href="'+href+'" hrefLang="'+next.toLowerCase()+'"')||new RegExp('href="'+href+'"[^>]*href[Ll]ang="'+next+'"').test(html),path+' language link '+next);
  }
  const expected=portfolio?'Priestor.':'Nová éra';
  assert.ok(html.includes(locale==='sk'?expected:dictionary[expected][locale]),path+' translated heading');
  if(locale!=='sk'){
   const visible=html.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,'');
   const chunks=[...visible.matchAll(/>([^<>]+)</g)].map(x=>x[1].trim()).filter(Boolean);
   const leftovers=chunks.filter(x=>dictionary[x]&&dictionary[x][locale]!==x);
   assert.deepEqual(leftovers,[],path+' untranslated text');
  }
  results.push({path,locale,status:response.status,contact:true});
 }
}
const unknown=await fetch(baseUrl+'/fr');
assert.equal(unknown.status,404,'unsupported language');
console.log(JSON.stringify({translationEntries:Object.keys(dictionary).length,routes:results,unknownLocale:unknown.status},null,2));

