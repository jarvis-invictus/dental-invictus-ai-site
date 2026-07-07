const puppeteer = require('puppeteer');

async function capture() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1440, height: 900 });

    const sites = [
        { url: 'https://s1.invictus-ai.in', file: 'public/proposals/standard-1-full.jpg' },
        { url: 'https://s2.invictus-ai.in', file: 'public/proposals/standard-2-full.jpg' },
        { url: 'https://p1.invictus-ai.in', file: 'public/proposals/premium-1-full.jpg' },
        { url: 'https://p2.invictus-ai.in', file: 'public/proposals/premium-2-full.jpg' },
    ];

    for (let s of sites) {
        console.log(`Capturing ${s.url}...`);
        try {
            await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
            // wait for a bit so images/fonts load
            await new Promise(r => setTimeout(r, 6000)); 
            await page.screenshot({ path: s.file, fullPage: true, quality: 70, type: 'jpeg' });
            console.log(`Saved ${s.file}`);
        } catch (e) {
            console.log(`Error on ${s.url}: ${e.message}`);
        }
    }

    await browser.close();
}

capture();
