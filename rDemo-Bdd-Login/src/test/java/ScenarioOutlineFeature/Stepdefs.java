package ScenarioOutlineFeature;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {

	private WebDriver driver;

@Given("^Open the firefox and launch the application$")
public void open_the_firefox_and_launch_the_application() throws Exception {
    // Write code here that turns the phrase above into concrete actions
	String projectLocation=System.getProperty("user.dir");
	System.setProperty("webdriver.chrome.driver", projectLocation+"\\lib\\chromedriver.exe");
	driver= new ChromeDriver();
	driver.get("file:///D:/HotelBooking.html");
}

@When("^Enter the Username \"([^\"]*)\" and Password \"([^\"]*)\"$")
public void enter_the_Username_and_Password(String arg1, String arg2) throws Exception {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("txtUName")).sendKeys(arg1);
	
	driver.findElement(By.name("txtPwd")).sendKeys(arg2);
	Thread.sleep(1000);
}

@Then("^submit the Credential$")
public void submit_the_Credential() throws Exception {
    // Write code here that turns the phrase above into concrete actions
	Thread.sleep(1000);
	driver.findElement(By.name("submit")).click();
}




}
