import test, { chromium } from "@playwright/test";

test("basic chromium session - no built-in fixtures", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
});

// page == tab
// context == window
test("multi tab chromium session", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // First tab (page)
  const page1 = await context.newPage();
  await page1.goto("https://google.com");

  // Second tab (page)
  const page2 = await context.newPage();
  await page2.goto("https://playwright.dev/");
});

// page == tab
// context == window
test("multi window chromium session", async () => {
  const browser = await chromium.launch();
  const context1 = await browser.newContext();

  // First window (context)
  const pageOfWindow1 = await context1.newPage();
  await pageOfWindow1.goto("https://google.com");

  // Second window (context)
  const context2 = await browser.newContext();
  const pageOfWindow2 = await context2.newPage();
  await pageOfWindow2.goto("https://playwright.dev/");
});
