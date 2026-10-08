import { chromium } from 'playwright-core';
import { execSync } from 'node:child_process';
const b = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:3200/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
await p.evaluate(() => scrollTo(0, 2.4 * innerHeight)); await p.waitForTimeout(400);
for (const o of [0, 0.05, 0.08, 0.1, 0.12, 0.16]) {
  await p.evaluate(v => { document.querySelector('[data-root] > div').style.opacity = v; }, o);
  await p.waitForTimeout(150);
  await p.screenshot({ path: `shots/cal-${o}.png` });
}
await b.close();
