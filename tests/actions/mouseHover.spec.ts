import test from "@playwright/test";

test("mouse hover over element", async ({ page }) => {
  await page.getByText("Get started").hover();
});
