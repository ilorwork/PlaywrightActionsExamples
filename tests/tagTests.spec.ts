import { test } from "@playwright/test";

// Tags/Annotations are meant to group tests together, without having to put then at the file/folder.
// executing tests by tag (CLI):
// npx playwright test --grep @foo
test("test with a single tag - @foo", async ({ page }) => {
  await page.goto("/");
});

test("test with multiple tags - @foo @bar", async ({ page }) => {
  await page.goto("/");
});
