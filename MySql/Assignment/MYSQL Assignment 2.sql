-- LAB ACTIVITY 1


create table student (
	stdID int primary key,
	StdName varchar(30) not null,
	sex varchar(10),
	percentage decimal(5,2),
	SClass int,
	Sec varchar(1),
	Stream varchar(10),
	dob date
);

insert into student values 
(1001, 'AKSHRA AGARWAL', 'female', 70, 11, 'a', 'science', '1996-11-10'),
(1002, 'ANJANI SHARMA', 'female', 75, 11, 'a', 'COMMERCE', '1996-09-18'),
(1003, 'ANSHUL SAXENA', 'male', 78, 11, 'a', 'COMMERCE', '1996-11-19'),
(1004, 'AISHWARYA SINGH', 'female', 79, 11, 'a', 'COMMERCE', '1996-11-1'),
(1005, 'AKRITI SAXENA', 'female', 76, 11, 'a', 'COMMERCE', '1996-09-20'),
(1006, 'KHUSHI AGARWAL', 'female', 77, 11, 'a', 'COMMERCE', '2003-09-14'),
(1007, 'MAAHI AGARWAL', 'female', 74, 11, 'a', 'science', '1997-04-21'),
(1008, 'MITALI GUPTA', 'female', 78, 11, 'a', 'science', '1997-11-26'),
(1009, 'NIKUNJ AGARWAL', 'male', 58, 11, 'a', 'science', '1997-7-12'),
(1010, 'PARKHI', 'female', 59, 11, 'a', 'COMMERCE', '1997-12-20'),
(1011, 'PRAKHAR TIWARI', 'male', 43, 11, 'a', 'science', '1997-04-22'),
(1012, 'RAGHAV GANGWAR', 'male', 58, 11, 'a', 'COMMERCE', '1997-12-21'),
(1013, 'SAHIL SARASWAT', 'male', 57, 11, 'a', 'COMMERCE', '1997-08-13'),
(1014, 'SWATI MISHRA', 'female', 98, 11, 'a', 'science', '1996-08-28'),
(1015, 'HARSH AGARWAL', 'male', 65, 11, 'B', 'science', '2003-08-28'),
(1016, 'HARSHIT KUMAR', 'male', 66, 11, 'B', 'science', '2003-05-22'),
(1017, 'JAHANVI KAPOOR', 'male', 85, 11, 'B', 'science', '1997-01-10'),
(1018, 'STUTI MISHRA', 'male', 75, 11, 'C', 'COMMERCE', '1996-01-10'),
(1019, 'SURYANSH KUMAR AGARWAL', 'male', 85, 11, 'C', 'COMMERCE', '2007-08-22'),
(1020, 'TANI RASTOGI', 'female', 75, 11, 'C', 'COMMERCE', '1998-01-15'),
(1021, 'TANISHK GUPTA', 'male', 55, 11, 'C', 'science', '1998-04-11'),
(1022, 'TANMAY AGARWAL', 'male', 57, 11, 'C', 'COMMERCE', '1998-06-28'),
(1023, 'YASH SAXENA', 'male', 79, 11, 'C', 'science', '1998-03-13'),
(1024, 'YESH DUBEY', 'male', 85, 11, 'C', 'COMMERCE', '1998-04-03');





-- LAB ACTIVITY 2
SELECT * FROM STUDENT;
SELECT stdname, dob from student;
SELECT * from student where percentage >= 80;
SELECT stdName, stream, percentage from student where percentage > 80;
SELECT * from student where stream = 'science' and percentage > 75;


-- LAB ACTIVITY 3
DESCRIBE student;

ALTER TABLE student
add  teacherID varchar(20);

desc student;

SELECT * from student;

ALTER TABLE student modify teacherid int;
desc student;
select * from student;



-- LAB ACTIVITY 4
ALTER TABLE student drop teacherID;
select stdname, percentage-5 from student;
select stdName as "Student Name", dob as "Date of Birth" from student;
select stdName from student where stream <> 'science';
select stdName, percentage from student where percentage >= 60 and percentage >= 80;



-- LAB ACTIVITY 5
update student set stdName = 'SWATI VARMA',  percentage = 86 where stdid = 1014;
delete from student where stdid = 1016;
SELECT * FROM Student WHERE StdName LIKE 'G_' ; 
SELECT * FROM Student WHERE StdName like 'G';
SELECT * FROM Student WHERE StdName LIKE 'G%' ; 
SELECT * FROM Student WHERE StdName like '%G%';
SELECT DISTINCT stream from student;
select stdName, sex, stream from student where percentage between 70 and 80;



-- DO YOURSELF

CREATE TABLE Empl(
	empno int,
	ename varchar(20),
	job varchar(20),
	mgr int,
	hiredate date,
	sal double,
	comm double,
	deptno int
);

INSERT INTO Empl VALUES
(8369, 'SMITH', 'CLERK', 8902, '1990-12-18', 800.00, NULL, 20),
(8499, 'ANYA', 'SALESMAN', 8698, '1991-02-20', 1600.00, 300.00, 30),
(8521, 'SETH', 'SALESMAN', 8690, '1991-01-22', 1250.00, 500.00, 30),
(8566, 'MAHADEVAN', 'MANAGER', 8839, '1991-01-02', 2985.00, NULL,20),
(8654, 'MOMN', 'SALESMAN', 8698, '1991-09-28', 1250.00, 1400.00, 30),
(8698, 'BINA', 'MANAGER', 8839, '1991-05-01', 2850.00, NULL,30),
(8882, 'SHIVANSH', 'MANAGER', 8839, '1991-06-09', 2450.00, NULL,10),
(8888, 'SCOTT', 'ANALYST', 8566, '1992-12-09', 3000.00, NULL,20),
(8839, 'AMIR', 'PRESIDENT', NULL, '1991-11-18', 5000.00, NULL,10),
(8844, 'KULDEEP', 'SALESMAN', 8698, '1991-09-08', 1500.00, 0.00, 30);


-- A. Write a query to display EName and Sal of employees whose salary are greater than or equal to 2200?
SELECT ENAME, SAL FROM EMPL WHERE SAL >= 2200;

-- B. Write a query to display details of employs who are not getting commission?
SELECT * FROM EMPL WHERE COMM IS NULL OR COMM = 0;

-- C. Write a query to display employee name and salary of those employees who don’t have their salary in range of 2500 to 4000?
SELECT ENAME, SAL FROM EMPL WHERE SAL NOT BETWEEN 2500 AND 4000;

-- D. Write a query to display the name, job title and salary of employees who don’t have manager?
SELECT ENAME, JOB, SAL FROM EMPL WHERE MGR IS NULL;

-- E. Write a query to display the name of employee whose name contains “A” as third alphabet?
SELECT ENAME FROM EMPL WHERE ENAME LIKE "__A%";

-- F. Write a query to display the name of employee whose name contains “T” as last alphabet?
SELECT ENAME FROM EMPL WHERE ENAME LIKE "%T";

-- G. Write a query to display the name of employee whose name contains ”M” as First and “L” as third alphabet?
SELECT ENAME FROM EMPL WHERE ENAME LIKE "M_L%";

-- H. Write a query to display details of employs with the text “Not given”, if commission is null?

DELIMITER &&

CREATE FUNCTION checkComission(
    ecomm DOUBLE
) RETURNS VARCHAR(10) DETERMINISTIC
BEGIN
    IF (ecomm IS NULL OR ecomm = 0.00) THEN
        RETURN 'Not given';
    ELSE 
        RETURN CAST(ecomm AS CHAR);
    END IF;
END &&

DELIMITER ;

select 	empno, ename, job, mgr, hiredate, sal,
	checkComission(comm) "Comm", deptno  
from empl;






