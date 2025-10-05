@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."


    Background:
        Given User is on the enrollment page
        And User completed the start application step
        And User completed the payment plan page
    @sep29-1
    Scenario: Verify that an error message is displayed when user entered incomplete CVV number
        When User enters an incomplete cvv number
        And User checks on t&C check box
        Then the cvv error message "Your card’s security code is incomplete." is displayed