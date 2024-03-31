import test from "@playwright/test";

// https://playwright.dev/docs/api/class-mouse
// The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
// TODO: Investigate how this class works and provide a better explenation

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("move mouse down", async ({ page }) => {
  await page.mouse.down();
});

test("move mouse to specific location", async ({ page }) => {
  await page.mouse.move(0, 0);
});
