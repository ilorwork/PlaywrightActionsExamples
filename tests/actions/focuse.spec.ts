import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test.describe("focuse", () => {
  test("focuse on an element", async ({ page }) => {
    await page.getByLabel("Password").focus();
  });
});

test.describe("blur", () => {
  test("blur out of an element", async ({ page }) => {
    await page.getByLabel("Password").blur();
  });

  test("blur out of an element by dispatching a blur event", async ({
    page,
  }) => {
    await page.getByLabel("Password").dispatchEvent("blur");
  });
});
