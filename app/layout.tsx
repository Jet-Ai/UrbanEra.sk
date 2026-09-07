import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';
import { isLocale } from '@/lib/locales';
import { siteMetadata } from '@/lib/site-metadata';
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = siteMetadata('sk');

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requested=(await headers()).get('x-urbanera-locale');
  const locale=requested&&isLocale(requested)?requested:'sk';
  return (
    <html lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
