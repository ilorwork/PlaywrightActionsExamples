import test from "@playwright/test";

// note: locator.all() does not wait for elements to match the locator,
// and instead immediately returns whatever is present in the page.
test("locate matching all elements", async ({ page }) => {
  const listItems = await page.getByRole("listitem").all();
});
