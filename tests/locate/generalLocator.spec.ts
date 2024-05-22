import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("locate element using CssSelector", async ({ page }) => {
  page.locator("#someId > tag .class");
});

test("locate element using Xpath", async ({ page }) => {
  page.locator("//div[@id='someId']");
});
