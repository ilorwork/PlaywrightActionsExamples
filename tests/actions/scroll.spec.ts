import test from "@playwright/test";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("scroll element into view if needed", async ({ page }) => {
  await page.getByText("Get started").scrollIntoViewIfNeeded();
});

test("scroll to coordinates using mouse wheel", async ({ page }) => {
  const delta_x = 5;
  const delta_y = 5;
  page.mouse.wheel(delta_x, delta_y);
});

// Example converted from python on: https://www.lambdatest.com/blog/scroll-to-an-element-in-playwright/
test("real life mouse-wheel scrolling example", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "Shop by Category" }).click();
  await page.getByRole("link", { name: "Software" }).click();
  const pageToBeScrolled = await page
    .getByRole("combobox", { name: "Show:" })
    .selectOption(
      "https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17&limit=75"
    );

  await page.goto(pageToBeScrolled[0]);

  // Since image are lazy-loaded scroll to bottom of page
  // the range is dynamically decided based on the number of items i.e. we take the range from limit
  for (let i = 0; i < parseInt(pageToBeScrolled[0].split("=").pop()!); i++) {
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(100); // Time in milliseconds
  }
});
