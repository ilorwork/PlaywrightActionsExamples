import { test } from "@playwright/test";

// Playwright handles Shadow-DOM elements like regular elements.
test.beforeEach(async ({ page }) => {
  await page.goto("chrome://policy/");
});

test("locate shadow DOM element", async ({ page }) => {
  await page.getByText("Policy name").click();
});
