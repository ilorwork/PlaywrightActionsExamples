import test, { Page, chromium } from "@playwright/test";

test.describe("examples for using the branded version of Chrome (installed on your PC)", () => {
  test("launch pc chrome", async ({}) => {
    const browser = await chromium.launch({
      channel: "chrome", // Make test run on the computer's chrome browser
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://playwright.dev/");
    await page.getByText("Get started").click();
  });

  // Please note that for this test to run you must close chrome first!!
  // otherwize you'll get: "Error: browserType.launchPersistentContext: Target page, context or browser has been closed"
  test("launch pc chrome with it's user", async ({}) => {
    // Replace this path with your own chrome user-data path
    const userDataDir =
      "C:\\Users\\Home\\AppData\\Local\\Google\\Chrome\\User Data";

    const browserContext = await chromium.launchPersistentContext(userDataDir, {
      channel: "chrome",
    });
    // launchPersistentContext already creates a page for you,
    // so `const page = await browser.newPage();` is not needed here,
    // instead get the page from browser.pages()
    let page: Page;

    page = browserContext.pages().at(0) as Page;
    if (!page) page = await browserContext.newPage();

    await page.goto("https://playwright.dev/");
    await page.getByText("Get started").click();
  });
});
