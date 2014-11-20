package test;

import static org.junit.Assert.*;

import java.util.Set;

import org.junit.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

public class DifferentBrowserTestJunit {
	WebDriver driver;
	@Before
	public void setUpImpl(){
	   System.setProperty("webdriver.ie.driver" ,"F:/\\books/\\IEDriverServer_Win32_2.43.0/\\IEDriverServer.exe");
	  driver = new InternetExplorerDriver();
	}
	
	@Test
	public void   testGoogleSite(){  driver.get("http://www.google.com");}


}
