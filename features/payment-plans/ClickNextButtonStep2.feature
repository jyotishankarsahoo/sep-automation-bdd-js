@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.

    Background:
        Given User is on the enrollment page
        And User completed the start application step

    @sep16-1
    Scenario: The Next button is enabled after selecting a payment plan
        Then the next button on step two should be disabled by default
        When User select upfront payment plan
        Then the Next button should be enabled

# Scenario: Select a Payment plan and proceed to Review step
#     When User selects a payment plan
#     And User clicks on next button
#     Then User should navigate to "3 - Review" Step
#     And the "Start Application" and "Payment Plan" steps should be marked as completed
#     And the "Review" step should be highlighted as current step
#     And Payment form should be displayed
#     And Price summary should be displayed
#     And Back button should be displayed


