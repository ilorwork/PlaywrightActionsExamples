import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("get text from element", async ({ page }) => {
  const text = await page.getByLabel("Search").textContent();
});

test("get text from all matching elements", async ({ page }) => {
  const texts = await page.getByRole("link").allTextContents();
});

test("get input field value", async ({ page }) => {
  const value = await page.getByLabel("Search").inputValue();
});

test("get the inner text of an element", async ({ page }) => {
  const text = await page.getByText("Get started").innerText();
});

test("get the inner text of all matching elements", async ({ page }) => {
  const texts = await page.getByRole("link").allInnerTexts();
});

test("get the inner HTML of an element", async ({ page }) => {
  const text = await page.getByText("Get started").innerHTML();
});
