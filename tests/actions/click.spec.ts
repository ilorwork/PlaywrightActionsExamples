import test from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("single mouse click", async ({ page }) => {
  await page.getByText("Get started").click();
});

test("double mouse click", async ({ page }) => {
  await page.getByText("Get started").dblclick();
});

test("mouse right click", async ({ page }) => {
  await page.getByText("Get started").click({ button: "right" });
});

test("press shift and then click", async ({ page }) => {
  await page.getByText("Get started").click({ modifiers: ["Shift"] });
});

test("mouse click by coordinates", async ({ page }) => {
  // This test locate the "get started" button,
  // and then perform a click at 50 50 coordinate where the Docs button is
  await page.getByText("Get started").click({ position: { x: 50, y: 50 } });
  await page.pause();
});

test("mouse click by coordinates extracted from bounding box", async ({
  page,
}) => {
  const box = await page.getByText("Get started").boundingBox();

  // perform a click in the center point if the element
  if (box)
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
});

// Docs - https://playwright.dev/docs/input#forcing-the-click
test("forced mouse click", async ({ page }) => {
  await page.getByText("Get started").click({ force: true });
});

test("perform click by dispatching a click event", async ({ page }) => {
  await page.getByText("Get started").dispatchEvent("click");
});
