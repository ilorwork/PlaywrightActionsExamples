import test from "@playwright/test";
import path from "path";
import { readFileSync } from "fs";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("upload a file", async ({ page }) => {
  // Select one file
  await page
    .getByLabel("Upload file")
    .setInputFiles(path.join(__dirname, "myfile.pdf"));
});

test("upload multiple files", async ({ page }) => {
  // Select multiple files
  await page
    .getByLabel("Upload files")
    .setInputFiles([
      path.join(__dirname, "file1.txt"),
      path.join(__dirname, "file2.txt"),
    ]);
});

test("remove all the selected files", async ({ page }) => {
  await page.getByLabel("Upload file").setInputFiles([]);
});

test("Upload a file as buffer from memory", async ({ page }) => {
  // Upload buffer from memory
  await page.getByLabel("Upload file").setInputFiles({
    name: "file.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is test"),
  });
});

test("Upload a file to a non-input element", async ({ page }) => {
  // Start waiting for file chooser before clicking. Note no await.
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.getByLabel("Upload file").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(__dirname, "myfile.pdf"));
});

test("drag and drop file from desktop", async ({ page }) => {
  await page.goto("https://www.dragdrop.com/test/");
  const filePath = path.join(__dirname, "../image-1.png");
  await page.locator('id="dropzone"').click();
  const buffer = readFileSync(filePath).toString("base64");

  const dataTransfer = await page.evaluateHandle(
    async ({ bufferData, localFileName, localFileType }) => {
      const dt = new DataTransfer();

      const blobData = await fetch(bufferData).then((res) => res.blob());

      const file = new File([blobData], localFileName, { type: localFileType });
      dt.items.add(file);
      return dt;
    },
    {
      bufferData: `data:application/octet-stream;base64,${buffer}`,
      localFileName: "image1",
      localFileType: "",
    }
  );

  await page.dispatchEvent("#demo-upload", "drop", { dataTransfer });
});
