import test, { expect } from "@playwright/test";

test("get req - get all countries", async ({ request }) => {
  const res = await request.get(
    `https://countriesnow.space/api/v0.1/countries`
  );
  const data = await res.json();
  console.log(data);

  expect(res.ok()).toBeTruthy();

  // Checks that data obj is "deeplly equal" to the AsymmetricMatcher returning by objectContaining assertion
  expect(data).toEqual(
    // Checks if the data obj contains those key-value pairs.
    expect.objectContaining({
      error: false,
      msg: "countries and cities retrieved",
    })
  );
});
