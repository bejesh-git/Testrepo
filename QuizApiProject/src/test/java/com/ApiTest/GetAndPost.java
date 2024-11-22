package com.ApiTest;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;
 

public class GetAndPost {
@Test
public void testPost(){
	 
	Map<String,Object> map = new HashMap<String, Object>();
	
//	map.put("name", "Monica");
//	map.put("job", "Trainer");
//	
//	System.out.println(map);
	
	JSONObject request = new JSONObject(map);
	
	request.put("fname", "selva");
	request.put("lname", "Balaji");
	request.put("contact", "7812805662");
	request.put("email", "selva@gmail.com");
	request.put("gender", "male");
	request.put("role", "employees");
	
	System.out.println(request.toJSONString());
	
	String baseURI = "http://quiz-be-test.hematitecorp.com";
	
	given().
	header("Content-Type", "application/json").//you should know header of your json response.
	contentType(ContentType.JSON).accept(ContentType.JSON). //explicitly telling to server that my content type is json
	body(request.toJSONString()).
	post("/api/user/").then().statusCode(200).log().all();
		Object response;
		int statusCode = ((Object) response).getStatusCode();
		
		Assert.assertEquals(statusCode, 200);  
 }

private Object given() {
	// TODO Auto-generated method stub
	return null;
}
 
}

