import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/chromium', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(process.argv[2] || 'http://localhost:3200/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
const c = await p.context().newCDPSession(p); await c.send('Performance.enable');
const m = async () => Object.fromEntries((await c.send('Performance.getMetrics')).metrics.map(x => [x.name, x.value]));
const scenes = await p.evaluate(() => [...document.querySelectorAll('[data-scene]')].map((s, i) => ({ i, top: s.offsetTop, h: s.offsetHeight })));
const rows = [];
for (const s of scenes) {
  const a = await m(); const f0 = Date.now();
  const frames = await p.evaluate(async ({ top, h }) => { let n = 0; await new Promise(d => { let y = top - innerHeight * .5; const end = top + h - innerHeight * .5; const st = () => { y += 40; scrollTo(0, y); n++; y < end ? requestAnimationFrame(st) : d(); }; requestAnimationFrame(st); }); return n; }, s);
  const z = await m();
  const d = k => (z[k] - a[k]) * 1000 / frames;
  rows.push({ scene: s.i, vh: Math.round(s.h / 9), frames, style: +d('RecalcStyleDuration').toFixed(2), layout: +d('LayoutDuration').toFixed(2), script: +d('ScriptDuration').toFixed(2), task: +d('TaskDuration').toFixed(2) });
}
console.table(rows);
await b.close();
