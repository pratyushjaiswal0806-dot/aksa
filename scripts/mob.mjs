// usage: node scripts/mob.mjs <prefix> [width height]   -> one screenshot per scene at 3 progress points
import { chromium } from 'playwright-core';
const [prefix = 'm', w = '390', h = '844'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, hasTouch: true, isMobile: true });
await p.goto(process.env.URL || 'http://localhost:3200/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
const sc = await p.evaluate(() => [...document.querySelectorAll('[data-scene]')].map(s => ({ top: s.offsetTop, h: s.offsetHeight })));
console.log('scrollWidth', await p.evaluate(() => document.documentElement.scrollWidth), 'vw', w);
for (let i = 0; i < sc.length; i++) {
  const { top, h: hh } = sc[i]; const pin = hh > +h * 1.5;
  const pts = pin ? [0.1, 0.5, 0.9] : [0, 0.5, 1];
  for (const [k, f] of pts.entries()) {
    const y = pin ? top + f * (hh - +h) : top + f * (hh - +h) ;
    await p.evaluate(v => scrollTo(0, v), Math.max(0, y)); await p.waitForTimeout(250);
    await p.screenshot({ path: `shots/${prefix}-${String(i).padStart(2, '0')}-${k}.png` });
  }
}
await b.close();
