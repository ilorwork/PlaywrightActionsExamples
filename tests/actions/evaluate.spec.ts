import test, { expect } from "@playwright/test";

// https://playwright.dev/docs/api/class-locator#locator-evaluate
// Evaluate method is using to execute JavaScript code in the page, taking the matching element as an argument.

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

// evaluate
test("evaluate element text", async ({ page }) => {
  const tweets = page.getByText("Get started");
  expect(await tweets.evaluate((node) => (node as HTMLElement).innerText)).toBe(
    "GET STARTED"
  );
});

// evaluateAll
test("evaluate all div elements min-length", async ({ page }) => {
  const locator = page.locator("div");
  const moreThanTen = await locator.evaluateAll(
    (divs, min) => divs.length > min,
    10
  );
});

// TODO: add https://playwright.dev/docs/api/class-locator#locator-evaluate-handle
