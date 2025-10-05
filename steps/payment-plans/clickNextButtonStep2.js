import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
    paymentPlanPage,
    page,
    startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
    "the next button on step two should be disabled by default",
    async function () {
        await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
    }
);

When("User select upfront payment plan", async function () {
    await paymentPlanPage.selectPaymentPlan("upfront");
});

Then("the Next button should be enabled", async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

Then("Step one circle should be green", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
        "background-color",
        "rgb(172, 245, 138)"
    );
});

Then("Step two stepper circle should be blue", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
        "background-color",
        "rgb(1, 201, 255)"
    );
});

When("User clicks the next button on payment plan page", async function () {
    await paymentPlanPage.clickNextButton();
});

Then("Step two stepper circle should be green", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
        "background-color",
        "rgb(172, 245, 138)"
    );
});

Then("Step three stepper circle should be blue", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
        "background-color",
        "rgb(1, 201, 255)"
    );
});
