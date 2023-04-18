Feature: Test Successful Addition of a New Computer to Database
  Scenario: As an anonymous user
    Given I visit the homepage
    Given I should see the title "Computers database"
    Given I click on Add a new computer button
    Given I enter "correct" details of computer
    When I click on submit
    Then I am navigated to home page
    Then I verify success message is displayed
