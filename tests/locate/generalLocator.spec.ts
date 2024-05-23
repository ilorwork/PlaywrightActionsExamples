import test from "@playwright/test";

// Locators are the central piece of Playwright's auto-waiting and retry-ability.
// In a nutshell, locators represent a way to find element(s) on the page at any moment.

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("locate element using CssSelector", async ({ page }) => {
  page.locator("#someId > tag .class");
});

test("locate element using Xpath", async ({ page }) => {
  page.locator("//div[@id='someId']");
});
