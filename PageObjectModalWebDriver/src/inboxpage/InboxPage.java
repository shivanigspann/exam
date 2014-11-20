package inboxpage;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class InboxPage {
	WebDriver driver=new FirefoxDriver();
	private By compose=By.xpath("html/body/div[7]/div[3]/div/div[2]/div[1]/div[1]/div[1]/div[2]/div/div/div[1]/div/div");
	private By to=By.linkText("To");
	
	public InboxPage clickComposeEmail(){
		System.out.println("Hello Compose");
		Set<String> allWin=driver.getWindowHandles();
		
		for(String s:allWin){
			if(driver.switchTo().window(s).getTitle().contains("Inbox"))
								break;
		}
		System.out.println("Window "+driver.getTitle());
	
		driver.findElement(compose).click();
		System.out.println("Hello click compose");
		return this;
	}
	
	public boolean verifyCompose(){
		System.out.println("Hello verify");
		WebElement we=driver.findElement(to);
		System.out.println("Hello to");
		return we.isDisplayed();
	}
}