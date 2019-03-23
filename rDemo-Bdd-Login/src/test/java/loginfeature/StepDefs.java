package loginfeature;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefs {
	
	
private WebDriver driver;
	

	

	@Given("^open the Firefox and launch the application$")
	public void open_the_Firefox_and_launch_the_application() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		
		String projectLocation=System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", projectLocation+"\\lib\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("file:///D:/HotelBooking.html");
		
		
	/*    throw new PendingException();*/
	}

	@When("^Enter the Username and Password$")
	public void enter_the_Username_and_Password() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    /*throw new PendingException();*/
		//Find Username textbox and enter value
				driver.findElement(By.name("txtUName")).sendKeys("Amit123");
				
				
				//Find password textbox and enter value
				driver.findElement(By.name("txtPwd")).sendKeys("igate");
				Thread.sleep(1000);
				
				//Find confirm password textbox and enter value
						driver.findElement(By.id("txtConfPassword")).sendKeys("igate");
						Thread.sleep(1000);
	}

	@Then("^Reset the credential$")
	public void reset_the_credential() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    /*throw new PendingException();*/
		driver.findElement(By.name("reset")).click();
		
	}

	
}
