package com.QuizApp;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
 

public class LoginandRegistrationApp {

	@Test
	public void GET_Student_registration_Get() {
		
		Response response = get("http://quiz-fe.hematitecorp.com/#/student-registration");
		
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
	
	
	@Test
	public void GET_Student_DETAILS_Get() {
		
		baseURI = "http://quiz-be-test.hematitecorp.com";
		 
		
		given().get("/api/user/").then().statusCode(200).body("data.id",equalTo(104)).log().all();
	}
	
	
	
	@Test
	public void Student_registration_POST() {
		
		Map<String, Object> map = new  HashMap<String, Object>();
		
		
		
		JSONObject request = new JSONObject(map);
		
		request.put("fname", "Bejesh");
		request.put("lname", "Sriram");
		request.put("contact", "9880674567");
		request.put("email", "bejesh@gmail.com");
		request.put("gender", "male");
		request.put("role", "student");
		
		
		System.out.println(request.toJSONString());
		
		baseURI = "http://quiz-be-test.hematitecorp.com";
		
		given().
		header("Content-Type", "application/json").//you should know header of your json response.
		contentType(ContentType.JSON).accept(ContentType.JSON). //explicitly telling to server that my content type is json
		body(request.toJSONString()).
		post("/api/user/").then().statusCode(200).log().all();
		
	}
	

	
	@Test
	public void GET_Student_registration_TOKENS() {
		
		baseURI = "http://quiz-be-test.hematitecorp.com";
		 
		// First, log in to retrieve the token
		String loginPayload = "{\r\n"
				+ "  \"email\": \"admin@gmail.com\",\r\n"
				+ "  \"password\": \"Admin@1234\"\r\n"
				+ "}";
 
		// Send the POST request to get the token
		Response loginResponse = given().
				header("Content-Type", "application/json").
				contentType(ContentType.JSON).
				accept(ContentType.JSON).
				body(loginPayload).
				post("/api/token/");
 
		// Print response to verify token retrieval in case of an error
		loginResponse.prettyPrint();
 
		// Extract the token from the response JSON - adjust "token" based on actual response structure
		String token = loginResponse.jsonPath().getString("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNTA1NDcyLCJpYXQiOjE3MzE0ODk4NzIsImp0aSI6ImMwM2M2YzI1Y2M1YTRlZGU5YjU4Mjk3Y2M1MDI1MTFlIiwidXNlcl9pZCI6Mn0.ciV9UII7uh5TYtRMOH-_NooohAqOp1TDpbCqfG38TX4");  // Change "token" to actual key name in response
 
		if (token == null || token.isEmpty()) {
			System.out.println("Failed to retrieve token. Please check login credentials and API response structure.");
			return;
		}
		
	}
	

	
	
	@Test
	public void testGet1() {
	
	baseURI = "http://localhost:3000";
	
	given().get("/posts").
	
	then().
	
	assertThat().body(matchesJsonSchemaInClasspath("schema.json")).statusCode(200);
	
	}
 
}
