$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/LoanApplication.feature");
formatter.feature({
  "name": "LoanApplication",
  "description": "\tIn order to buy something nice now\n\tAs a cash poor customer\n\tI want to borrow money so I don\u0027t have to wait",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Application completed successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dev"
    }
  ]
});
formatter.step({
  "name": "I am on the loan application screen",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_am_on_the_loan_application_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a first name of Sarah",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_enter_a_first_name_of_Sarah()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a second name of Smith",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_enter_a_second_name_of_Smith()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select that I have an existing loan account",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_select_that_I_have_an_existing_loan_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I confirm my acceptance of the terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_confirm_my_acceptance_of_the_terms_and_conditions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit my application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_submit_my_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the application complete confirmation for Sarah",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsForLoanApplication.i_should_see_the_application_complete_confirmation_for_Sarah()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});