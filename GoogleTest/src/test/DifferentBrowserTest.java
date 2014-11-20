package test;

import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.TestNG;
import org.testng.annotations.*;

public class DifferentBrowserTest extends TestNG{
	WebDriver driver;
	@BeforeSuite
	public void setUpImpl(){
	   System.setProperty("webdriver.ie.driver" ,"F:/\\books/\\IEDriverServer_Win32_2.43.0/\\IEDriverServer.exe");
	  driver = new InternetExplorerDriver();
	}
	
	@Test
	public void   testGoogleSite(){  driver.get("http://www.google.com");}


}
