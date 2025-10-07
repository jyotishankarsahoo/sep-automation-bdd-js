import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When(
    "User provides valid information for all required fields including optional information",
    async function () {
        await startApplicationPage.enterFirstName("Jyoti");
        await startApplicationPage.enterLastName("Sahoo");
        await startApplicationPage.enterEmail("jsahoo@apple.com");
        await startApplicationPage.enterPhoneNumber("4083323363");
        await startApplicationPage.selectHowDidYouHearAboutUs("linkedin");
    }
);

When("Clicks on Next button on Step one", async function () {
    await startApplicationPage.clickNextButton();
});

Then("Step one stepper circle should be green", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
        "background-color",
        "rgb(172, 245, 138)"
    );
});

When(
    "User provides valid information for all required fields without optional information",
    async function () {
        await startApplicationPage.enterFirstName("Jyoti");
        await startApplicationPage.enterLastName("Sahoo");
        await startApplicationPage.enterEmail("jsahoo@apple.com");
        await startApplicationPage.enterPhoneNumber("4083323363");
    }
);
