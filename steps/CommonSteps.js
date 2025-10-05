import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
    startApplicationPage,
    leftMainPage,
    paymentPlanPage,
    reviewPaymentPage,
    page,
} from "../globalPagesSetup.js";

Given("User is on the enrollment page", async function () {
    await startApplicationPage.login();
});

Given("User completed the start application step", async function () {
    await startApplicationPage.enterFirstName("Jyoti");
    await startApplicationPage.enterLastName("Sahoo");
    await startApplicationPage.enterEmail("jsahoo@apple.com");
    await startApplicationPage.enterPhoneNumber("4083323363");
    await startApplicationPage.selectHowDidYouHearAboutUs("linkedin");
    await startApplicationPage.clickNextButton();
});
