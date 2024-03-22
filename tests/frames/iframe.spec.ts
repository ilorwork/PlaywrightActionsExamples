import test from "@playwright/test";

test("handle an iFrame", async ({ page }) => {
  const locator = page.frameLocator("#my-frame").getByText("Submit");
  await locator.click();
});
