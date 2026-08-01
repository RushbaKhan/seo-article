const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const pages = [
  ['00-structure-overview.html', 'dashboard-00-structure-overview.png'],
  ['01-dashboard-home.html', 'dashboard-01-home.png'],
  ['02-my-websites.html', 'dashboard-02-my-websites.png'],
  ['03-daily-log.html', 'dashboard-03-daily-log.png'],
  ['04-weekly-targets.html', 'dashboard-04-weekly-targets.png'],
  ['05-cursor-usage.html', 'dashboard-05-cursor-usage.png'],
  ['06-gsc-status.html', 'dashboard-06-gsc-status.png'],
  ['07-team-overview.html', 'dashboard-07-team-overview.png'],
];

async function capture(htmlFile, outFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  const fileUrl = 'file://' + path.resolve('dashboard-mockups', htmlFile);
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  const height = Math.min(await page.evaluate(() => document.body.scrollHeight), 1200);
  await page.screenshot({
    path: path.join('dashboard-mockups', 'screenshots', outFile),
    fullPage: false,
    clip: { x: 0, y: 0, width: 1440, height },
  });
  console.log(outFile, '1440x' + height);
  await browser.close();
}

(async () => {
  const dir = path.join('dashboard-mockups', 'screenshots');
  fs.mkdirSync(dir, { recursive: true });
  for (const [html, png] of pages) {
    await capture(html, png);
  }
  console.log('Done —', pages.length, 'screenshots saved to dashboard-mockups/screenshots/');
})();
