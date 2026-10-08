import { chromium } from 'playwright-core';
const tests = {
  base: '',
  noGrain: '[style*="mix-blend-mode: multiply"][style*="fixed"]{display:none!important}',
  noBackdrop: 'nav{backdrop-filter:none!important}',
  noBlur: '*{filter:none!important}',
  noShadowText: '*{text-shadow:none!important}',
  noAnim: '*{animation:none!important}',
  noBlend: '*{mix-blend-mode:normal!important}',
  all: '[style*="fixed"][style*="multiply"]{display:none!important} nav{backdrop-filter:none!important} *{filter:none!important;text-shadow:none!important;animation:none!important;mix-blend-mode:normal!important}',
};
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
for (const [name, css] of Object.entries(tests)) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(process.argv[2] || 'http://localhost:3200/', { waitUntil: 'load' });
  await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' + css });
  const r = await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight - innerHeight; const frames = []; let last = performance.now(), y = 0;
    await new Promise(d => { const s = () => { const n = performance.now(); frames.push(n - last); last = n; y += 40; scrollTo(0, y); y < total ? requestAnimationFrame(s) : d(); }; requestAnimationFrame(s); });
    frames.sort((a, b) => a - b); return { avg: +(frames.reduce((a, b) => a + b) / frames.length).toFixed(1), p95: +frames[Math.floor(frames.length * .95)].toFixed(1) };
  });
  console.log(name.padEnd(12), JSON.stringify(r));
  await page.close();
}
await browser.close();
