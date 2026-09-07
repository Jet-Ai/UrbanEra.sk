import { NextResponse, type NextRequest } from 'next/server';
import { isLocale } from './lib/locales';
export function middleware(request:NextRequest){
  const prefix=request.nextUrl.pathname.split('/')[1];
  const requestHeaders=new Headers(request.headers);
  requestHeaders.set('x-urbanera-locale',isLocale(prefix)?prefix:'sk');
  return NextResponse.next({request:{headers:requestHeaders}});
}
export const config={matcher:['/((?!_next/|favicon.svg|architecture.webp|portfolio/Video|portfolio/realization/).*)']};
