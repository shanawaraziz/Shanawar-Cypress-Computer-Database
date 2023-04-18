Feature: Test Successful Addition of a New Computer to Database
  Scenario: As an anonymous user
    Given I visit the homepage
    Given I should see the title "Computers database"
    Given I click on Add a new computer button
    Given I enter "incorrect" details of computer
    When I click on submit button
    Then I verify date validation message is displayed
