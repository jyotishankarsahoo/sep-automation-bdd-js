import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("User enters an expiration date in past", async function () {
    await reviewPaymentPage.enterExpiryDate("11/12");
});
When("User enters incomplete expiration number", async function () {
    await reviewPaymentPage.enterExpiryDate("11/");
});
Then(
    "the card expiration error message {string} is displayed",
    async function (string) {
        const actualMessage =
            await reviewPaymentPage.cardExpiryErrorMessage.innerText();
        expect(actualMessage).toEqual(string);
    }
);
