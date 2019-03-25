$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login/loginfeature.feature");
formatter.feature({
  "name": "Login Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "check the title of Login Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the title of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.check_the_title_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login page with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username \u0027\u003cusername\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "capgemini",
        "capg1234"
      ]
    },
    {
      "cells": [
        "Casfpgemini",
        "capg1234"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "Casfpgemini",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Login page with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \u0027capgemini\u0027 and password \u0027capg1234\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.user_enters_username_Capgemini_and_password_capg(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.validate_the_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Login page with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \u0027Casfpgemini\u0027 and password \u0027capg1234\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.user_enters_username_Capgemini_and_password_capg(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.validate_the_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Login page with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \u0027\u0027 and password \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.user_enters_username_Capgemini_and_password_capg(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.validate_the_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Login page with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \u0027Casfpgemini\u0027 and password \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.user_enters_username_Capgemini_and_password_capg(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.validate_the_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "check the title Hotel Booking Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Hotel Booking page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "check the title of the page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.check_the_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "booking page with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Hotel Booking Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters firstname \u0027\u003cfirstname\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "user enters lastname \u0027\u003clastname\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user enters email \u0027\u003cemail\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user enters contactno. \u0027\u003ccontactno\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user enters address \u0027\u003caddress\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user selects city \u0027\u003ccity\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user selects state \u0027\u003cstate\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "user selects number of people staying \u0027\u003cpeople\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "contactno",
        "address",
        "city",
        "state",
        "people"
      ]
    },
    {
      "cells": [
        "Rahul",
        "Gupta",
        "rahulvarshney@gmail.com",
        "9058367295",
        "Subhash Nagar",
        "Bangalore",
        "Maharashtra",
        "2"
      ]
    }
  ]
});
formatter.background({
  "name": "user has already open Hotel Booking Application and is navigated to Login page.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "booking page with credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "user is on Hotel Booking Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters firstname \u0027Rahul\u0027",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters lastname \u0027Gupta\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters email \u0027rahulvarshney@gmail.com\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters contactno. \u00279058367295\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters address \u0027Subhash Nagar\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user selects city \u0027Bangalore\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user selects state \u0027Maharashtra\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user selects number of people staying \u00272\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "validate the credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.validate_the_credentials()"
});
formatter.result({
  "status": "skipped"
});
});