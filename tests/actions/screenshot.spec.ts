import test from "@playwright/test";
import path from "path";

test.beforeEach(async ({ page }) => await page.goto("https://playwright.dev/"));

test("Take a screenshot of the element matching the locator", async ({
  page,
}) => {
  await page.getByText("Get started").screenshot();
});

test("Disable animations and save screenshot to a file", async ({
  page,
}, testInfo) => {
  await page.getByText("Get started").screenshot({
    animations: "disabled",
    path: path.join(__dirname, `../../my screenshots/${testInfo.testId}.png`),
  });
});
