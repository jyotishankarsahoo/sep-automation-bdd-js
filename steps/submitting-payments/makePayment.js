import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
    reviewPaymentPage,
    startApplicationPage,
    page,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

const jsonResponseBody = {
    id: "pi_3SEygiJmxFuDfdzn1TPFf3or",
    object: "payment_intent",
    amount: 41200,
    amount_details: {
        tip: {},
    },
    automatic_payment_methods: {
        allow_redirects: "always",
        enabled: true,
    },
    canceled_at: null,
    cancellation_reason: null,
    capture_method: "automatic",
    client_secret:
        "pi_3SEygiJmxFuDfdzn1TPFf3or_secret_fr3JYr5IO6a2wUYdLDJxx6IsA",
    confirmation_method: "automatic",
    created: 1759696668,
    currency: "usd",
    description: "Test Automation with Selenium - one_time",
    excluded_payment_method_types: null,
    last_payment_error: null,
    livemode: false,
    next_action: null,
    payment_method: "pm_1SEygiJmxFuDfdznuiMWbzZr",
    payment_method_configuration_details: {
        id: "pmc_1Olb9IJmxFuDfdznXRTQVXKM",
        parent: null,
    },
    payment_method_types: ["card", "customer_balance"],
    processing: null,
    receipt_email: null,
    setup_future_usage: null,
    shipping: null,
    source: null,
    status: "succeeded",
};
When("User enters valid card information", async function () {
    await reviewPaymentPage.enterCardNumber(process.env.CARD_NUMBER);
    await reviewPaymentPage.enterExpiryDate(process.env.EXPIRATION_DATE);
    await reviewPaymentPage.enterCVC(process.env.CVC);
    await reviewPaymentPage.enterZipCode(process.env.ZIP_CODE);
});
// TODO: Currently being Mocked since Pay API is Failing in QA Environment
When("Clicks on Pay button", async function () {
    const targetUrl = "**/v1/payment_intents/*/confirm";
    await page.route(targetUrl, async (route) => {
        const request = route.request();
        console.log(`\n--- Intercepted Request ---`);
        console.log(`Method: ${request.method()}`);
        console.log(`URL: ${request.url()}`);
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(jsonResponseBody),
        });
        console.log(`✅ Request to ${route.request().url()} was mocked.`);
    });
    await reviewPaymentPage.clickPayButton();
    await page.waitForResponse(targetUrl);
});

Then("Step three stepper circle should be green", async function () {
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
        "background-color",
        "rgb(172, 245, 138)"
    );
});

Then("Program Name is displayed correctly", async function () {
    const actualProgramName = productInfo.programName;
    await expect(
        page.locator("span").filter({ hasText: actualProgramName })
    ).toBeVisible();
});

Then("User Email is displayed correctly", async function () {
    const actualEmail = await page
        .locator("div.payment-confirmation")
        .locator("u")
        .innerText();
    expect(actualEmail).toEqual("jsahoo@apple.com.");
});

Then("Company contact information is displayed correctly", async function () {
    const footerTextLocator = page.locator("p.footer-text").last();
    await expect(footerTextLocator).toHaveText(
        "Need help? Contact us at enrollment@cydeo.com"
    );
});
