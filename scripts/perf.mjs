import { chromium } from 'playwright-core';
const url = process.argv[2] || 'http://localhost:3200/';
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
let bytes = 0, reqs = 0;
page.on('response', async r => { reqs++; try { bytes += (await r.body()).length; } catch {} });
const t0 = Date.now();
await page.goto(url, { waitUntil: 'load' });
const nav = await page.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; const p = performance.getEntriesByType('paint'); return { dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), fcp: Math.round(p.find(e => e.name === 'first-contentful-paint')?.startTime || 0) }; });
console.log('load', Date.now() - t0, 'ms', nav, 'reqs', reqs, 'KB', Math.round(bytes / 1024));
await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
const res = await page.evaluate(async () => {
  const total = document.documentElement.scrollHeight - innerHeight;
  const frames = []; let last = performance.now(); let y = 0;
  await new Promise(done => {
    const step = () => {
      const now = performance.now(); frames.push(now - last); last = now;
      y += 40; scrollTo(0, y);
      y < total ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  });
  frames.sort((a, b) => a - b);
  const avg = frames.reduce((a, b) => a + b, 0) / frames.length;
  return { n: frames.length, avg: +avg.toFixed(1), p50: +frames[frames.length >> 1].toFixed(1), p95: +frames[Math.floor(frames.length * .95)].toFixed(1), max: +frames[frames.length - 1].toFixed(1), over33: frames.filter(f => f > 33).length };
});
console.log('scroll frames(ms)', res);
await browser.close();
