import test from "@playwright/test";

test("simple navigation", async ({ page }) => {
  // consider operation to be finished when the load event is fired.
  await page.goto("https://playwright.dev/");
});

test("wait for page to load until the DOMContentLoaded event is fired", async ({
  page,
}) => {
  // wait for the DOMContentLoaded event to be fired
  await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });
});

test("wait for page to load until network is idle for 500 mili-sec", async ({
  page,
}) => {
  // wait until there are no network connections for at least 500 ms.
  await page.goto("https://playwright.dev/", { waitUntil: "networkidle" });
});

// TODO: add wait for "commit" event example
