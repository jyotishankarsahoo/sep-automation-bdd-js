import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("User enters an incomplete cvv number", async function () {
    await reviewPaymentPage.enterCVC("11");
});
Then("the cvv error message {string} is displayed", async function (string) {
    const actualMessage =
        await reviewPaymentPage.cardCVCErrorMessage.innerText();
    expect(actualMessage).toEqual(string);
});
