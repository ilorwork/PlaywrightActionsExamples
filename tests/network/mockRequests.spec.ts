// https://playwright.dev/docs/mock
import { test, expect } from "@playwright/test";

test("mock the request body with a fake fruit item", async ({ page }) => {
  const mockedJson = [{ name: "Strawberry", id: 21 }];

  await page.route("*/**/api/v1/fruits", async (route) => {
    await route.fulfill({ json: mockedJson });
  });

  await page.goto("https://demo.playwright.dev/api-mocking");

  await expect(page.getByText("Strawberry", { exact: true })).toBeVisible();
});

test("abort all images requests", async ({ page }) => {
  // await page.route("**/*.{png,jpg,jpeg}", (route) => route.abort()); // another option
  await page.route(/(png|jpeg)$/, (route) => route.abort());
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(5000);
});
