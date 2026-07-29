const { chromium } = require('playwright');
const path = require('path');

async function capture(htmlFile, outFile) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const fileUrl = 'file://' + path.resolve(htmlFile);
  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  const height = await page.evaluate(() => document.body.scrollHeight);
  const width = await page.evaluate(() => document.body.scrollWidth);
  await page.setViewportSize({ width, height });
  await page.screenshot({
    path: outFile,
    clip: { x: 0, y: 0, width, height },
  });
  console.log(outFile, width + 'x' + height);
  await browser.close();
}

(async () => {
  await capture('rules-image-part1.html', 'SEO-DEPARTMENT-RULES-PART-1.png');
  await capture('rules-image-part2.html', 'SEO-DEPARTMENT-RULES-PART-2.png');
})();
