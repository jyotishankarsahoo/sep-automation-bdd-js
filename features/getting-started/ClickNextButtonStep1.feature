@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given User is on the enrollment page
    @sep19-1
    Scenario: Submit enrollment from with all valid Information
        When User provides valid information for all required fields including optional information
        And Clicks on Next button on Step one
        Then Step one stepper circle should be green
        And Step two stepper circle should be blue
    @sep19-2
    Scenario: Submit enrollment from with only required valid information
        When User provides valid information for all required fields without optional information
        And Clicks on Next button on Step one
        Then Step one stepper circle should be green
        And Step two stepper circle should be blue