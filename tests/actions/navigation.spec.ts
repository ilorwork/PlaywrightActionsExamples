import test from "@playwright/test";

test("simple navigation", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});
