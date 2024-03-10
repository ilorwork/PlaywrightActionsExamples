import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("select a single option of a select element", async ({ page }) => {
  // Single selection matching the value or label
  await page.getByLabel("Choose a color").selectOption("blue");
});

test("select a single option by label", async ({ page }) => {
  // Single selection matching the label
  await page.getByLabel("Choose a color").selectOption({ label: "Blue" });
});

test("select multible options", async ({ page }) => {
  // Multiple selected items
  await page
    .getByLabel("Choose multiple colors")
    .selectOption(["red", "green", "blue"]);
});
