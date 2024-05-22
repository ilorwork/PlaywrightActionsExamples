import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("check a checkbox element", async ({ page }) => {
  await page.getByLabel("I agree to the terms above").check();
});

test("select the radio button option", async ({ page }) => {
  await page.getByLabel("XL").check();
});

test("uncheck a checkbox element", async ({ page }) => {
  await page.getByLabel("I agree to the terms above").uncheck();
});

test("get checkbox state", async ({ page }) => {
  const checked = await page.getByRole("checkbox").isChecked();
});
