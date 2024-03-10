import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("focuse on an element", async ({ page }) => {
  await page.getByLabel("Password").focus();
});

test("blur out of an element", async ({ page }) => {
  await page.getByLabel("Password").blur();
});
