import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

// Useful for debugging
test("highlight element", async ({ page }) => {
  await page.getByText("Get started").highlight();
});
