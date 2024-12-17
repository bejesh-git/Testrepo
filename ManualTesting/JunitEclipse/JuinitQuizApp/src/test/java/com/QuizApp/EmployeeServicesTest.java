package com.QuizApp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EmployeeServicesTest {
	
	private EmployeeService employeeService;

	@BeforeEach
	public void setUp() {
	    employeeService = new EmployeeService();
	}

	// Test registering a valid new employee
	@Test
	void testRegisterEmployeeValid() {
	    Employee employee = new Employee("John", "Doe", "john.doe@example.com", "1234567890", "Manager");
	    assertEquals(employeeService.registerEmployee(employee), true, "Registration successful");
	}

	// Test registering an employee with an invalid email format
	@Test
	void testRegisterEmployeeInvalidEmail() {
	    Employee employee = new Employee("Jane", "Doe", "invalid-email", "(123)4567890","Developer");
	    Exception exception = assertThrows(RuntimeException.class, () -> {
	        employeeService.registerEmployee(employee);
	    });
	    assertEquals("Invalid email or phone format", exception.getMessage());
	}
	
	// Test registering an employee with an invalid phone format
	@Test
	void testRegisterEmployeeWithInvalidPhone() {
		Employee employee = new Employee("Alice", "Smith", "alice.smith@example.com", "12345", "designer");
		Exception exception = assertThrows(IllegalArgumentException.class, () -> {
		    employeeService.registerEmployee(employee);
		});

		assertEquals("Invalid email or phone format", exception.getMessage());
	
	}
	
	// Test registering an employee with a duplicate email
	@Test
	void testRegisterEmployeeDuplicateEmail() {
	    Employee firstEmployee= new Employee("John", "Doe", "john.duplicate@example.com", "1234567890", "Manager");
	    
	    Employee duplicateEmployee = new Employee("Jane", "Smith", "john.duplicate@example.com", "0987654321", "Developer");
	    employeeService.registerEmployee(firstEmployee);
	    Exception exception = assertThrows(IllegalArgumentException.class, () -> {
	        employeeService.registerEmployee(duplicateEmployee);
	    });
	    assertEquals("Employee with this email or phone already exists", exception.getMessage());
	}

	// Test registering an employee with a duplicate phone number
	    @Test
		void testRegisterEmployeeDuplicatePhone() {
		    Employee firstEmployee= new Employee("John", "Doe", "john.duplicate@example.com", "1234567890", "Manager");
		    
		    Employee duplicateEmployee = new Employee("Jane", "Smith", "jane@example.com", "1234567890", "Developer");
		    employeeService.registerEmployee(firstEmployee);
		    Exception exception = assertThrows(IllegalArgumentException.class, () -> {
		        employeeService.registerEmployee(duplicateEmployee);
		    });
		    assertEquals("Employee with this email or phone already exists", exception.getMessage());
		}

}
