import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("expect page title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Ensures the Locator resolves to an exact number of DOM nodes", async ({
  page,
}) => {
  const list = page.locator("list > .component");
  await expect(list).toHaveCount(3);
});
