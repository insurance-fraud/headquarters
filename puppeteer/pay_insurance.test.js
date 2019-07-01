const puppeteer = require("puppeteer");
jest.setTimeout(10000)

test("Pay for first option", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await page.type("[data-cy=email]", "test@example.com");
  await page.click("[data-cy='10000']");
  await page.click("[data-cy=submit]");

  await page.waitForSelector("[data-cy=pan]");
  await expect(page).toMatch("PAN");

  await page.type('[data-cy=pan]', '2');
  await page.type('[data-cy=securityCode]', '2');
  await page.type('[data-cy=cardHolderName]', '2');
  await page.type('[data-cy=expirationDate]', '2');

  await page.click('[data-cy=pay]');

  await page.waitForSelector("[data-cy=successBox]");
  await expect(page).toMatch("Congrats, you've bought insurance from us!");

  await browser.close();
});

test("Balance is too low", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await page.type("[data-cy=email]", "test@example.com");
  await page.click("[data-cy='10000']");
  await page.click("[data-cy=submit]");

  await page.waitForSelector("[data-cy=pan]");
  await expect(page).toMatch("PAN");

  await page.type('[data-cy=pan]', '4');
  await page.type('[data-cy=securityCode]', '4');
  await page.type('[data-cy=cardHolderName]', '4');
  await page.type('[data-cy=expirationDate]', '4');

  await page.click('[data-cy=pay]');

  await page.waitForSelector("[data-cy=errorBox]");
  await expect(page).toMatch("Oops! The transaction didn't go through, sorry.");

  await browser.close();
});