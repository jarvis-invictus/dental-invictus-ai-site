const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://s1.invictus-ai.in', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/proposals/standard-1-full.jpg', fullPage: true, type: 'jpeg', quality: 80 });
  
  await page.goto('https://s2.invictus-ai.in', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/proposals/standard-2-full.jpg', fullPage: true, type: 'jpeg', quality: 80 });
  
  await page.goto('https://p1.invictus-ai.in', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/proposals/premium-1-full.jpg', fullPage: true, type: 'jpeg', quality: 80 });
  
  await page.goto('https://p2.invictus-ai.in', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'public/proposals/premium-2-full.jpg', fullPage: true, type: 'jpeg', quality: 80 });
  
  await browser.close();
})();
