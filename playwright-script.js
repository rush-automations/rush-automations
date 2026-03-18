const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/privacy');

  // Wait for the page to load completely
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: path.join('/home/jules/verification', 'privacy_after_fix.png') });

  await browser.close();
})();
