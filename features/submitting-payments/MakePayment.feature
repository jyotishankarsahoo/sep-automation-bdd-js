@sep23
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox,
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.

    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.

    Background:
        Given User is on the enrollment page
        And User completed the start application step
        And User completed the payment plan page

    @sep23-1
    Scenario: Verify User navigates to confirmation page when valid card information is entered and clicked Pay button
        When User enters valid card information
        And User checks on t&C check box
        And Clicks on Pay button
        Then Step three stepper circle should be green
    @sep23-2
    Scenario: Verify All Stepper Circles are Green
        When User enters valid card information
        And User checks on t&C check box
        And Clicks on Pay button
        Then Step one circle should be green
        And Step two stepper circle should be green
        And Step three stepper circle should be green
    @sep23-3
    Scenario: Verify program name user email and company contact are correctly displayed
        When User enters valid card information
        And User checks on t&C check box
        And Clicks on Pay button
        Then Program Name is displayed correctly
        And User Email is displayed correctly
        And Company contact information is displayed correctly



