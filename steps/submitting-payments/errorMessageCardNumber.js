import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("User enters an invalid card number", async function () {
    await reviewPaymentPage.enterCardNumber("1111111111111111");
});

When("User checks on t&C check box", async function () {
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

When("User enters incomplete number", async function () {
    await reviewPaymentPage.enterCardNumber("111111111111111");
});

Then(
    "the card number error message {string} is displayed",
    async function (string) {
        const actualMessage =
            await reviewPaymentPage.cardNumberErrorMessage.innerText();
        expect(actualMessage).toEqual(string);
    }
);
