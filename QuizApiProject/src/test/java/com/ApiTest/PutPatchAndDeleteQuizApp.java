package com.ApiTest;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
 

public class PutPatchAndDeleteQuizApp {
	@Test
	public void PutPatchDelete() {

 String baseURI = "http://quiz-be-test.hematitecorp.com";
	 
	// First, log in to retrieve the token
	String loginPayload = "{\r\n"
			+ "  \"email\": \"admin@gmail.com\",\r\n"
			+ "  \"password\": \"Admin@1234\"\r\n"
			+ "}";

	// Send the POST request to get the token
	Response loginResponse = given().
			header("Content-Type", "application/json").
			header("Authorization", "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNTA1NDcyLCJpYXQiOjE3MzE0ODk4NzIsImp0aSI6ImMwM2M2YzI1Y2M1YTRlZGU5YjU4Mjk3Y2M1MDI1MTFlIiwidXNlcl9pZCI6Mn0.ciV9UII7uh5TYtRMOH-_NooohAqOp1TDpbCqfG38TX4"). // Add the token to the Authorization header
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
			body(request.toJSONString()).
			put("/api/user/employee/").
			then().
			statusCode(200).
			log().all();
		}

	// Print response to verify token retrieval in case of an error
	loginResponse.prettyPrint();

	// Extract the token from the response JSON - adjust "token" based on actual response structure
	String token = loginResponse.jsonPath().getString("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxNTA1NDcyLCJpYXQiOjE3MzE0ODk4NzIsImp0aSI6ImMwM2M2YzI1Y2M1YTRlZGU5YjU4Mjk3Y2M1MDI1MTFlIiwidXNlcl9pZCI6Mn0.ciV9UII7uh5TYtRMOH-_NooohAqOp1TDpbCqfG38TX4");  // Change "token" to actual key name in response

	if (token == null || token.isEmpty()) {
		System.out.println("Failed to retrieve token. Please check login credentials and API response structure.");
		return;
	}
	}
}
