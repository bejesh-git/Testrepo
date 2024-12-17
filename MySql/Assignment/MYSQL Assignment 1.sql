CREATE TABLE Worker (     
WORKER_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,     
FIRST_NAME CHAR(25),     
LAST_NAME CHAR(25),     
SALARY INT(15),     
JOINING_DATE DATETIME,     
DEPARTMENT CHAR(25) 
);  

INSERT INTO Worker (WORKER_ID, FIRST_NAME, LAST_NAME, SALARY, JOINING_DATE, DEPARTMENT) 
VALUES         
(001, 'Monika', 'Arora', 100000, '14-02-20 09.00.00', 'HR'),         
(002, 'Niharika', 'Verma', 80000, '14-06-11 09.00.00', 'Admin'),         
(003, 'Vishal', 'Singhal', 300000, '14-02-20 09.00.00', 'HR'),         
(004, 'Amitabh', 'Singh', 500000, '14-02-20 09.00.00', 'Admin'),         
(005, 'Vivek', 'Bhati', 500000, '14-06-11 09.00.00', 'Admin'),         
(006, 'Vipul', 'Diwan', 200000, '14-06-11 09.00.00', 'Account'),         
(007, 'Satish', 'Kumar', 75000, '14-01-20 09.00.00', 'Account'),         
(008, 'Geetika', 'Chauhan', 90000, '14-04-11 09.00.00', 'Admin');  




CREATE TABLE Bonus (     
WORKER_REF_ID INT,     
BONUS_AMOUNT INT(10),     
BONUS_DATE DATETIME,     
FOREIGN KEY (WORKER_REF_ID)         
REFERENCES Worker(WORKER_ID)         
ON DELETE CASCADE 
);  


INSERT INTO Bonus (WORKER_REF_ID, BONUS_AMOUNT, BONUS_DATE) 
VALUES         
(001, 5000, '16-02-20'),         
(002, 3000, '16-06-11'),         
(003, 4000, '16-02-20'),         
(001, 4500, '16-02-20'),         
(002, 3500, '16-06-11');     



CREATE TABLE Title (     
WORKER_REF_ID INT,     
WORKER_TITLE CHAR(25),     
AFFECTED_FROM DATETIME,     
FOREIGN KEY (WORKER_REF_ID)
REFERENCES Worker(WORKER_ID)
ON DELETE CASCADE 
);  


INSERT INTO Title (WORKER_REF_ID, WORKER_TITLE, AFFECTED_FROM) 
VALUES 
(001, 'Manager', '2016-02-20 00:00:00'), 
(002, 'Executive', '2016-06-11 00:00:00'), 
(008, 'Executive', '2016-06-11 00:00:00'), 
(005, 'Manager', '2016-06-11 00:00:00'), 
(004, 'Asst. Manager', '2016-06-11 00:00:00'), 
(007, 'Executive', '2016-06-11 00:00:00'), 
(006, 'Lead', '2016-06-11 00:00:00'), 
(003, 'Lead', '2016-06-11 00:00:00');  




-- 1 Write a query to display all the first_name in upper case 
Select first_name, upper(first_name) from worker;  

-- 2 Write a querty to display unique department from workers table 
select distinct department from Worker;  

-- 3 Write an SQL query to print the first three characters of FIRST_NAME from Worker table 
select FIRST_NAME, left(FIRST_NAME, 3) from worker;  

-- 4 Write an SQL query to find the position of the alphabet (‘a’) in the first name column ‘Amitabh’ from Worker table. select FIRST_NAME, position('a' in FIRST_NAME) from Worker where FIRST_NAME = 'Amitabh'; -- Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length   -- Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending and DEPARTMENT Descending  -- Write a query to get workers whose name are Vipul and Satish   -- Write an SQL query to print details of the Workers whose FIRST_NAME contains 'a'  -- Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets  -- Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000  -- Write an SQL query to print details of the Workers who have joined in Feb’2014  -- Write an SQL query to fetch the count of employees working in the department ‘Admin’  -- Write an SQL query to fetch the no. of workers for each department in the descending order  -- Write a query to display workerrs who are managers  -- Write query to find duplicate rows title table  -- Write an SQL query to show all workers who got the bonus along with bonus amount  -- Write a query to find employees in worker table that do not exist in bonus table (ie did not get bonus)  -- Write a query to find the highest 2 salaries  -- Find 2nd highest without using LIMIT  -- Find people who have the same salary  -- Write a query to fetch 1st 50% records without using limit  -- Write a query to select a department with more than 3 people in worker table  -- Write a query to select 1st and last row of a worker table -- Write a query to select last 5 entries from worker table  -- Write a query to select people with highest salary in each group  -- Write a query to fetch departments along with the total salaries paid for each of them -- Write a query to fetch the names of workers who earn the highest salary
