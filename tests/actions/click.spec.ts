import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("single mouse click", async ({ page }) => {
  await page.getByRole("button").click();
});

test("double mouse click", async ({ page }) => {
  await page.getByText("Item").dblclick();
});

test("mouse right click", async ({ page }) => {
  await page.getByText("Item").click({ button: "right" });
});

test("press shift and then click", async ({ page }) => {
  await page.getByText("Item").click({ modifiers: ["Shift"] });
});

test("mouse hover over element", async ({ page }) => {
  await page.getByText("Item").hover();
});

test("mouse click by coordinates", async ({ page }) => {
  // Click the top left corner
  await page.getByText("Item").click({ position: { x: 0, y: 0 } });
});

// Docs - https://playwright.dev/docs/input#forcing-the-click
test("forced mouse click", async ({ page }) => {
  await page.getByRole("button").click({ force: true });
});

test("perform click by dispatching a click event", async ({ page }) => {
  await page.getByRole("button").dispatchEvent("click");
});
