const puppeteer = require('puppeteer');

test('Example', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await expect(page.title()).resolves.toMatch('Example Domain');

  await browser.close();
})
