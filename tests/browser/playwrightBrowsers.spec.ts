import test, { chromium, firefox, webkit } from "@playwright/test";

test.describe("Playwright browsers sessions without using built-in fixtures", () => {
  test("launch chromium session", async ({}) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/");
  });

  test("launch firefox (mozilla) session", async ({}) => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://playwright.dev/");
  });

  test("launch webkit (apple) session", async ({}) => {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://playwright.dev/");
  });
});
