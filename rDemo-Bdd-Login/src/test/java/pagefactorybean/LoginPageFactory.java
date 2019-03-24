package pagefactorybean;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageFactory {

	WebDriver driver;
	
	@FindBy(name="txtUName")
	@CacheLookup
	WebElement name;
	
	
	@FindBy(id="txtPassword")
	@CacheLookup
	WebElement pwd;
	
	
	@FindBy(id="txtConfPassword")
	@CacheLookup
	WebElement cnfPwd;
	
	@FindBy(name="submit")
	@CacheLookup
	WebElement btn;

	public WebElement getName() {
		return name;
	}

	public void setName(String namee) {
		name.clear();
		name.sendKeys(namee);
	}

	public WebElement getPwd() {
		return pwd;
	}

	public void setPwd(String pwdd) {
		pwd.clear();
		pwd.sendKeys(pwdd);
	}

	public WebElement getCnfPwd() {
		return cnfPwd;
	}

	public void setCnfPwd(String cnfPwdd) {
		cnfPwd.clear();
		cnfPwd.sendKeys(cnfPwdd);
		
	}

	public WebElement getBtn() {
		return btn;
	}

	public void setBtn() {
		btn.click();
		
	}

	public LoginPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
}
