package com.capgemini.login;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPOM {
	private WebDriver driver;
	@FindBy(how=How.NAME,name="userName")
	private WebElement userName;
	
	@FindBy(how=How.NAME,name="userPwd")
	private WebElement password;

	public LoginPOM(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	public String getUserName() {
		return userName.getText();
	}

	public void setUserName(String username) {
		
		this.userName.sendKeys(username);
	}

	public String getPassword() {
		return password.getText();
	}

	public void setPassword(String pass) {
		this.password.sendKeys(pass);
	}
	public void Submit() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		driver.findElement(By.cssSelector(".btn")).click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


}
