import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("drag and drop an element", async ({ page }) => {
  await page
    .locator("#item-to-be-dragged")
    .dragTo(page.locator("#item-to-drop-at"));
});

test("manually drag and drop an element", async ({ page }) => {
  // Uses lower-level methods - for cases that precise control is needed
  await page.locator("#item-to-be-dragged").hover();
  await page.mouse.down();
  await page.locator("#item-to-drop-at").hover();
  await page.mouse.up();
});
