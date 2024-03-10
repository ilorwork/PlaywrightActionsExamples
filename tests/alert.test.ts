import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("accept basic browser alert", async ({ page }) => {
  // alert listener
  page.on("dialog", (dialog) => {
    dialog.accept();
    console.log(`Dialog message: ${dialog.message()}`);
  });
});

test("dismiss basic browser alert", async ({ page }) => {
  page.on("dialog", (dialog) => dialog.dismiss());
});
