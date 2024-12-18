package com.automationtesting;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class LaunchBrowser {

	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws InterruptedException{
		// TODO Auto-generated method stub
		
		WebDriver driver1 = new ChromeDriver();
			driver1.get("http://quiz-fe-test.hematitecorp.com/");
			System.out.println(driver1.getTitle());
			System.out.println(driver1.getCurrentUrl());
			System.out.println(driver1.getPageSource());
			driver1.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			driver1.close();
			
		WebDriver driver2 = new EdgeDriver();
			driver2.get("http://quiz-fe-test.hematitecorp.com/");
			System.out.println(driver2.getTitle());
			System.out.println(driver2.getCurrentUrl());
			System.out.println(driver2.getPageSource());
			Thread.sleep(2000);
			driver2.close();
			
			
			
			
		
//		driver1.close();
		
//		WebDriver driver2 = new EdgeDriver();
//			driver2.get("http://quiz-fe-test.hematitecorp.com/");
//		
//		WebDriver driver3 = new FirefoxDriver();
//		
//		
//		
//		driver3.get("http://quiz-fe-test.hematitecorp.com/");
//		
//		
//		System.out.println(driver2.getTitle());
//		
//		System.out.println(driver2.getCurrentUrl());
//		
//		System.out.println(driver2.getPageSource());
//		
//		
//		driver2.navigate().to("http://hematiteweb.hematitecorp.com/");
//		
//		driver2.navigate().back();
//		
//		driver2.navigate().forward();
//		
//		driver2.navigate().refresh();
//		
//		driver2.manage().window().maximize();
//		
//		driver2.manage().window().minimize();
//		
//		driver2.manage().window().setSize(new Dimension(1024,768)); //import from selenium
//		
//		driver2.switchTo().alert();
//		
//		driver2.manage().getCookies();
//		
//		
////		driver.quit();
//		driver2.quit();
////		driver3.quit();
	}

}
