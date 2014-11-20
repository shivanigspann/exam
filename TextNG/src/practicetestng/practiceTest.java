package practicetestng;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;


import java.net.URL;

import org.openqa.selenium.OutputType;


import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


import com.beust.jcommander.Parameter;


public class practiceTest {

	WebDriver driver;

	@BeforeMethod
	@Parameters("browser")
	public void setUp(String browser){
		if(browser.equals("IE"))
		{	   System.setProperty("webdriver.ie.driver" ,"F:/\\books/\\IEDriverServer_Win32_2.43.0/\\IEDriverServer.exe");
		  driver = new InternetExplorerDriver();}
		else
		if(browser.equals("FF")){
			
		driver=new FirefoxDriver();
		}
	}

	
	@Test
	public void testFacebook() throws InterruptedException{
		
		driver.get("http://www.yahoo.com");
		driver.findElement(By.linkText("Sign In")).click();
		Thread.sleep(5000);
		driver.findElement(By.id("username")).sendKeys("shivani.gupta171@yahoo.com");
		driver.findElement(By.id("passwd")).sendKeys("rahul_123");
		driver.findElement(By.id(".save")).click();
	}

	@AfterMethod
	public void tearDown(){
		driver.quit();
	}	
}
