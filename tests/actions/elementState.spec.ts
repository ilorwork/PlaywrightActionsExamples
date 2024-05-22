import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("get bounding box of an element", async ({ page }) => {
  const box = await page.getByText("Get started").boundingBox();
});

test("Return whether the element is disabled or enabled", async ({ page }) => {
  const disabled = await page.getByRole("button").isDisabled();
});

test("Return whether the element is enabled or disabled", async ({ page }) => {
  const enabled = await page.getByRole("button").isEnabled();
});

test("Return whether the element is editable or not", async ({ page }) => {
  const editable = await page.getByRole("textbox").isEditable();
});

test("Return whether the element is hidden or visible", async ({ page }) => {
  const hidden = await page.getByRole("button").isHidden();
});

test("Return whether the element is visible or hidden", async ({ page }) => {
  const visible = await page.getByRole("button").isVisible();
});
