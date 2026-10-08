// usage: node scripts/shot.mjs <name> <scrollVh,scrollVh,...> [width] [height]
import { chromium } from 'playwright-core';
const [name, list = '0', w = '1440', h = '900'] = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
const errs = [];
page.on('console', m => m.type() === 'error' && errs.push(m.text()));
page.on('pageerror', e => errs.push(String(e)));
await page.goto('http://localhost:3200/', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
for (const v of list.split(',')) {
  await page.evaluate(y => scrollTo(0, y * innerHeight), +v);
  await page.waitForTimeout(350);
  await page.screenshot({ path: `shots/${name}-${v}.png` });
}
console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'no console errors');
await browser.close();
