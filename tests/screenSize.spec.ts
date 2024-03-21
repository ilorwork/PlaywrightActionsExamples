import test, { chromium, devices } from "@playwright/test";

test("set a specific (hardcoded) viewport size", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 703 });
});

test("set viewport size if a specific device", async ({ page }) => {
  page.setViewportSize(devices["iPhone X"].viewport);
});

test("set pc viewport size", async ({ page }) => {
  // Get the current viewport size
  const viewport = page.viewportSize();

  if (viewport) {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
  }
});

test.use({ ...devices[""] });
test("set maximize", async ({}) => {
  const browser = await chromium.launch({
    args: ["--start-maximized"],
  });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();
  await page.goto("https://playwright.dev/");
});
