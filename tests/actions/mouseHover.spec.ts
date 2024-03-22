import test from "@playwright/test";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("mouse hover over element", async ({ page }) => {
  await page.getByText("Get started").hover();
  // TODO: enhance test by adding assertion that ensure button color has changed
});
