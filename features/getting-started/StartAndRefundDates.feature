@sep11
Feature: Program start dates and Refund dates

    As a customer, I want to see the program start dates and refund policy details before enrolling
    so that I can make informed decisions.

    #* AC1: Program Start date and refund dates must be displayed in Step 1 in Test Automation with Selenium Program.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify program start date and refund date are displayed
        Then Program start date is visible
        And Program refund date is visible

    Scenario: Verify that program start date and refund date are correct
        Then The displayed Program start date is correct
        And The displayed Program refund date is correct

