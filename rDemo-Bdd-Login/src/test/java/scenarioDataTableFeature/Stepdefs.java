package scenarioDataTableFeature;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pagefactorybean.LoginPageFactory;

public class Stepdefs {
	private WebDriver driver;
	@Given("^Open the firefox and launch the application$")
	public void open_the_firefox_and_launch_the_application() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		String projectLocation=System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", projectLocation+"\\lib\\chromedriver.exe");
		driver= new ChromeDriver();
		
		driver.get("file:///E:/HotelBooking.html");
	}

	@When("^Enter the Username and Password$")
	public void enter_the_Username_and_Password(DataTable arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> data= arg1.raw();
		
		for(int i=0;i<data.size();i++)
		{
			/*
			 * driver.findElement(By.name("txtUName")).clear();
			 * driver.findElement(By.name("txtPwd")).clear();
			 */
			driver.findElement(By.name("txtUName")).sendKeys(data.get(i).get(0));
			driver.findElement(By.name("txtPwd")).sendKeys(data.get(i).get(1));
			Thread.sleep(2000);
			driver.findElement(By.name("reset")).click();
		}	
	}

	@Then("^reset the Credential$")
	public void reset_the_Credential() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Thanks");
	}

	




}
