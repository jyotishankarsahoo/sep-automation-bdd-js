import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("Program start date is visible", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("Program refund date is visible", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("The displayed Program start date is correct", async function () {
  const actualDate = await startApplicationPage.programStartDate.innerText();
  const expectedDate = productInfo.startDate;
  expect(actualDate).toEqual(expectedDate);
});

Then("The displayed Program refund date is correct", async function () {
  const actualDate = await startApplicationPage.refundEndDate.innerText();
  const expectedDate = productInfo.refundDate;
  expect(actualDate).toEqual(expectedDate);
});
