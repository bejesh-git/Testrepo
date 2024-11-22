package com.ApiTest;
import static io.restassured.RestAssured.get;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;
 

public class LoginAndRegisterAPP {
@Test
 public void GET_LOGIN() {
	 
	 
	 Response response = get("http://quiz-fe.hematitecorp.com/");
		
		System.out.println(response.getStatusCode());
		System.out.println(response.getTime());
		System.out.println(response.getBody().asString());
		System.out.println(response.getStatusLine());
		System.out.println(response.getHeader("content-type"));
		System.out.println(response.getHeader("User-Agent"));
		System.out.println(response.getHeader("Host"));
		System.out.println(response.getHeader("Connection"));
		
		int statusCode = response.getStatusCode();
		
		Assert.assertEquals(statusCode, 200);  
 }
 
}
