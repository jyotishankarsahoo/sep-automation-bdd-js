@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    Background:
        Given User is on the enrollment page
        And User completed the start application step
        And User completed the payment plan page
    @sep25-1
    Scenario: Verify that an error message is displayed when user entered invalid card number
        When User enters an invalid card number
        And User checks on t&C check box
        Then the card number error message "Your card number is invalid." is displayed
    @sep25-2
    Scenario: Verify that an error message is displayed when user entered incomplete number
        When User enters incomplete number
        And User checks on t&C check box
        Then the card number error message "Your card number is incomplete." is displayed