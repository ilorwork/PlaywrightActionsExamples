import test from "@playwright/test";

test("locate element inside another locator", async ({ page }) => {
  const product = page.getByRole("listitem").filter({ hasText: "Product 2" });

  // note- `locator.locator` instead of `page.locator`
  await product.getByRole("button", { name: "Add to cart" }).click();
});

test("locate an element that matches two locators", async ({ page }) => {
  const button = page.getByRole("button").and(page.getByTitle("Subscribe"));
});
