public class PathPages {

	static String url = "D:\\Cucumber-Selenium-POM-Demo\\scr\\main\\webapp\\LoanApplicationPage.html";
	static String title = "Loan Application Page";
	
	public void goTo() {
		
		Browser.goTo(url);
	}

	public boolean isAt() {
		return Browser.title().equals(title);
	}

	
	
}
