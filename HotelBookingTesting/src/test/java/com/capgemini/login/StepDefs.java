package com.capgemini.login;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {

	private WebDriver driver;
	private LoginPOM log;
	@Before
	public void setUp(){	
		String projectLocation=System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", projectLocation+"\\lib\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.navigate().to("D:\\HotelBookingTesting\\src\\main\\webapp\\login.html");
		log=new LoginPOM(driver);

	}
	@Given("^user is on Login page$")
	public void user_is_on_Login_page() throws Exception {
	
	}

	@Then("^check the title of the page$")
	public void check_the_title_of_the_page() throws Exception {
	}

	@When("^user enters username '(.*?)' and password '(.*?)'$")
	public void user_enters_username_Capgemini_and_password_capg(String userName,String password) throws Exception {
		log.setUserName(userName);
		log.setPassword(password);
	}

	@Then("^validate the credentials$")
	public void validate_the_credentials()  {
	 log.Submit();	
	}


	/*@After
	public void tearDown(){
	driver.quit();	
	}
*/
	

}
