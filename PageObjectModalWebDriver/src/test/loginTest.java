package test;

import inboxpage.InboxPage;
import page.*;
import org.openqa.selenium.By;
import org.testng.Assert;


import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.annotations.*;

import basepage.baseSetUpTest;


public class loginTest extends baseSetUpTest{
	
	loginPage lp=new loginPage();
	InboxPage ip;
	@BeforeMethod
	public void openUrl(){
		setUp("http://www.gmail.com");
	}
	@Test
	public void testGmail() throws InterruptedException{
		System.out.println("Hello1");
		lp.enterUserName("shivani17185");
		lp.enterPassword("123shivirocks_");
		ip=lp.clickLoginButton().clickComposeEmail();
		System.out.println("Hello end");
		assertTrue(ip.verifyCompose(),"compose is not clicked");
		System.out.println("Hello End Assertion");
	}
	@AfterMethod
	public void closeBrowser(){
		tearDown();
	}
	}
