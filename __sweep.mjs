import { chromium } from 'playwright';
const idx = await (await fetch('http://localhost:6006/index.json')).json();
const entries = Object.values(idx.entries || idx.stories || {});
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
let hits = [];
for (const e of entries) {
  const msgs = [];
  p.removeAllListeners('pageerror'); p.removeAllListeners('console');
  p.on('pageerror', x => msgs.push(String(x)));
  p.on('console', m => { if (m.type()==='error') msgs.push(m.text()); });
  try {
    await p.goto(`http://localhost:6006/iframe.html?id=${e.id}&viewMode=${e.type==='docs'?'docs':'story'}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await p.waitForTimeout(700);
  } catch {}
  const ill = msgs.filter(m => /illegal invocation/i.test(m));
  if (ill.length) { hits.push(e.id); console.log(`ILLEGAL: ${e.id} (${e.type||'story'}) :: ${ill[0].slice(0,120)}`); }
}
console.log(`\n${hits.length} pages with Illegal invocation / ${entries.length} total`);
await b.close();
