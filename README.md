# Shanawar-Cypress-Computer-Database

# INTRODUCTION:

This Cypress project uses Cucumber and Gherkin to implement following test case scenarios for Site: https://computer-database.gatling.io/computers:

* *add-a-new-computer-success.feature*
* *add-a-new-computer-validations.feature*
* *delete-a-computer.feature*


# HOW TO RUN:

Run the project using following command:

`npx cypress open`


## Provide a summary of your findings, including any issues you encountered and how you resolved them:

* ISSUE: New computer entries are not persisting on the site.

* SOLUTION: I asserted the message that appears when a computer is successfully added. In the future when entries start persisting, we will then also verify that they are showing on the table after addition.  


## Include a brief explanation of how you approached the task and why you made certain decisions.:

* Tried to cover core scenarios: Create, Date Validations, Delete