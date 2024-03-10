import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

// Docs - https://playwright.dev/docs/api/class-locator#locator-wait-for
test("wait for element state to be 'visible'", async ({ page }) => {
  // Way 1:
  await page.getByRole("button").waitFor();

  //Way 2:
  await page.getByRole("button").waitFor({ state: "visible" });
});

test("wait for element state to be 'hidden'", async ({ page }) => {
  await page.getByRole("button").waitFor({ state: "hidden" });
});

test("wait for element state to be 'attached'", async ({ page }) => {
  await page.getByRole("button").waitFor({ state: "attached" });
});

test("wait for element state to be 'detached'", async ({ page }) => {
  await page.getByRole("button").waitFor({ state: "detached" });
});
