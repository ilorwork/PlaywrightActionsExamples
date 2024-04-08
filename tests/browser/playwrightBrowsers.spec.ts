import test, { Page, chromium, firefox, webkit } from "@playwright/test";

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

  test("launch chromium as guest", async ({}, testInfo) => {
    if (testInfo.project.name !== "chromium") test.skip();

    const browser = await chromium.launchPersistentContext("", {
      args: ["--guest"],
    });

    // launchPersistentContext already creates a page for you,
    // so `const page = await browser.newPage();` is not needed here,
    // instead get the page from browser.pages()
    let page = browser.pages().at(0) as Page;
    if (!page) page = await browser.newPage();

    await page.goto("https://playwright.dev/");
  });
});
