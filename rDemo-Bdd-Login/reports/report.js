$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/loginfeature/FirstLoginFeature.feature");
formatter.feature({
  "name": "",
  "description": "\tsomething i will going to do",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verification of my reset button",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the Firefox and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.open_the_Firefox_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.enter_the_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Reset the credential",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.reset_the_credential()"
});
formatter.result({
  "status": "passed"
});
});