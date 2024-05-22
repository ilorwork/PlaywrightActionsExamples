import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("get element by alt-text", async ({ page }) => {
  const locator = page.getByAltText("Playwright logo");
});

test("get element by label", async ({ page }) => {
  const locator = page.getByLabel("Username");
});

test("get element by placeholder", async ({ page }) => {
  const locator = page.getByPlaceholder("name@example.com");
});

// Allows locating elements by their ARIA role, ARIA attributes and accessible name.
test("get element by role", async ({ page }) => {
  const locator = page.getByRole("heading", { name: "Sign up" });
});

// In case that your DOM contains a dedicated testing attribute.
// the attribute name can be configured via playwright.config file.
// for more info: https://playwright.dev/docs/api/class-locator#locator-get-by-test-id
test("get element by test-id custom attribute", async ({ page }) => {
  const locator = page.getByTestId("directions");
});

test("get element by substring", async ({ page }) => {
  const locator = page.getByText("Hello");
});

test("get element by exact string ", async ({ page }) => {
  const locator = page.getByText("Hello", { exact: true });
});

test("get element by title", async ({ page }) => {
  const locator = page.getByTitle("Issues count");
});
