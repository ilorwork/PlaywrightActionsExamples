// https://playwright.dev/docs/mock#modify-api-responses
import { test, expect } from "@playwright/test";

test("gets the json from api and adds a new fruit", async ({ page }) => {
  // Get the response and add to it
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: "Loquat", id: 100 });
    // Fulfill using the original response, while patching the response body
    // with the given JSON object.
    await route.fulfill({ response, json });
  });

  // Go to the page
  await page.goto("https://demo.playwright.dev/api-mocking");

  // Assert that the new fruit is visible
  await expect(page.getByText("Loquat", { exact: true })).toBeVisible();
});
