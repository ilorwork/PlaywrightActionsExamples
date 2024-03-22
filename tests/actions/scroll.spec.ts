import test from "@playwright/test";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("scroll element into view if needed", async ({ page }) => {
  await page.getByText("Get started").scrollIntoViewIfNeeded();
});

// TODO: add more scrolling tests
