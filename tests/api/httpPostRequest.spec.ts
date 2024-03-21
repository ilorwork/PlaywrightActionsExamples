import test, { expect } from "@playwright/test";

test("post req - get all cities of a specified country", async ({
  request,
}) => {
  const res = await request.post(
    `https://countriesnow.space/api/v0.1/countries/cities`,
    {
      data: {
        country: "Israel",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  const citiesArr = data.data;
  expect(citiesArr).toContain("Jerusalem");
});
