Feature:  functionality on login page of application
Scenario Outline: Verification of submit button with number of credentials
Given Open the firefox and launch the application
When Enter the Username <username> and Password <password>
Then submit the Credential

Examples:
|username |password  |
|"User11"  |"password11"  |
|"User22"  |"password22"  |
|"User33"  |"password33"  |