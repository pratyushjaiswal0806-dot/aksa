import type { Metadata, Viewport } from 'next';
import { Anton, Archivo, Caveat, Instrument_Serif, Special_Elite } from 'next/font/google';
import './globals.css';
import './mobile.css';
import Loader from '@/components/Loader';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-anton', display: 'swap' });
const archivo = Archivo({ weight: ['400', '600', '800'], subsets: ['latin'], variable: '--font-archivo', display: 'swap' });
const caveat = Caveat({ weight: ['500', '700'], subsets: ['latin'], variable: '--font-hand', display: 'swap' });
const serif = Instrument_Serif({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const elite = Special_Elite({ weight: '400', subsets: ['latin'], variable: '--font-elite', display: 'swap' });

export const metadata: Metadata = {
  title: 'AKSA — The stage is yours.',
  description: 'AKSA is a student theatre collective. A live performance you can scroll through.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#151515' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[anton, archivo, caveat, serif, elite].map(f => f.variable).join(' ')}>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
