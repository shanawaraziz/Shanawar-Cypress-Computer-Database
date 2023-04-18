Feature: Test Successful Deletion of a Computer from Database
  Scenario: As an anonymous user
    Given I visit the homepage
    Given I search for "ACE"
    Given I click on computer with name "ACE"
    When I click on delete button
    Then I am navigated to home page
    Then I verify delete message is displayed
