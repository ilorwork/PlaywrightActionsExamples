import test from "@playwright/test";

// Docs: https://playwright.dev/docs/test-fixtures#built-in-fixtures

test("using built-in fixture - page", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("using built-in fixture - context", async ({ context }) => {
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
});

test("using built-in fixture - browser", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
});

test("using built-in fixture - browserName", async ({ browserName }) => {
  console.log(browserName);
});

test("using built-in fixture - request", async ({ request }) => {
  await request.get("https://countriesnow.space/api/v0.1/countries");
});
