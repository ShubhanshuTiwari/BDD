@tag
Feature: Login Page

Background: user has already open Hotel Booking Application and is navigated to Login page.

Scenario: check the title of Login Page
	Given user is on Login page
	Then check the title of the page

Scenario Outline: Login page with credentials
	Given user is on Login page
	When user enters username '<username>' and password '<password>'
	Then validate the credentials
	Examples:
	|username|password|
	|capgemini|capg1234|
	|Casfpgemini|capg1234|
	|       |    |
	|Casfpgemini|   |

Scenario: check the title Hotel Booking Page
	Given user is on Hotel Booking page
	Then check the title of the page

Scenario Outline: booking page with credentials
	Given user is on Hotel Booking Page
	When user enters firstname '<firstname>'
	And user enters lastname '<lastname>'
	And user enters email '<email>'
	And user enters contactno. '<contactno>'
	And user enters address '<address>'
	And user selects city '<city>'
	And user selects state '<state>'
	And user selects number of people staying '<people>'
	Then validate the credentials
	Examples:
	|firstname|lastname|email|contactno|address|city|state|people|
	|Rahul    |   Gupta|rahulvarshney@gmail.com|9058367295|Subhash Nagar|Bangalore|Maharashtra|2|
	
	
	

