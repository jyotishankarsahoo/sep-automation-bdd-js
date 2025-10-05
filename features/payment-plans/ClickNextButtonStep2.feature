@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.

    Background:
        Given User is on the enrollment page
        And User completed the start application step

    @sep16-1
    Scenario: The Next button is enabled after selecting a payment plan
        Then the next button on step two should be disabled by default
        When User select upfront payment plan
        Then the Next button should be enabled
    @sep16-2
    Scenario: Verify that Step one and Step two stepper circle are green and Step three stepper is blue after clicking next button
        Then Step one circle should be green
        And Step two stepper circle should be blue
        When User select upfront payment plan
        And User clicks the next button on payment plan page
        Then Step one circle should be green
        And Step two stepper circle should be green
        And Step three stepper circle should be blue
    @sep16-3
    Scenario: Verify that payment summary is displayed after clicking a payment plan
        When User select upfront payment plan
        Then the upfront payment summary should be displayed
        When User select installments payment plan
        Then the installment payment summary should be displayed
    @sep16-4
    Scenario: Verify Back button is displayed and navigates back to start application step when clicked
        Then the back button should be displayed on the payment plan page
        And the back button is enabled on payment plan page
        When User clicks the back button on the payment plan page
        Then Step one stepper circle should be blue

