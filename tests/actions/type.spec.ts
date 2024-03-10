import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

// Docs - https://playwright.dev/docs/input#text-input
test("type/send text to element", async ({ page }) => {
  await page.getByRole("button").fill("text");
});

test("type text char by char", async ({ page }) => {
  // Press keys one by one
  await page.locator("#area").pressSequentially("Hello World!");
});

test("type char by char at user speed", async ({ page }) => {
  // Types slower, like a user
  await page.getByRole("textbox").pressSequentially("World", { delay: 100 });
});

test("press/send keyboard key", async ({ page }) => {
  await page.getByText("Submit").press("Enter");
});

test("press/send a sequence of keyboard keys", async ({ page }) => {
  await page.getByRole("textbox").press("Control+ArrowRight");
});

// @deprecated
test("type/send text to element using type(deprecated) method", async ({
  page,
}) => {
  await page.getByRole("textbox").type("text");
});
