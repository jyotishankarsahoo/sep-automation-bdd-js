@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed.


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


    Background:
        Given User is on the enrollment page
        And User completed the start application step
        And User completed the payment plan page
    @sep27-1
    Scenario: Verify that an error message is displayed when user entered past expiration year
        When User enters an expiration date in past
        And User checks on t&C check box
        Then the card expiration error message "Your card’s expiration year is in the past." is displayed
    @sep27-2
    Scenario: Verify that an error message is displayed when user entered incomplete expiration number
        When User enters incomplete expiration number
        And User checks on t&C check box
        Then the card expiration error message "Your card’s expiration date is incomplete." is displayed