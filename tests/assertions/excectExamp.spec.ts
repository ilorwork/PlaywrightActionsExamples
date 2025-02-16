import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("expect page title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Ensures the Locator resolves to an exact number of DOM nodes", async ({
  page,
}) => {
  const buttonsList = page.locator("button");
  await expect(buttonsList).toHaveCount(3);
});
