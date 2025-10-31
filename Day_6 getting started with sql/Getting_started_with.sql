-- Creating a Database
CREATE DATABASE IF NOT EXISTS EmployeeDB; //Creating  the DB if it doesnt exist already
USE EmployeeDB; //Using the created DB  
-- Creating a Table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT, -- Primary Key with Auto Increment when we dont want user to provide value for this column   
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    HireDate DATE NOT NULL, -- Date type for storing dates as it supports date functions
    Salary DECIMAL(10, 2) NOT NULL -- Decimal type with precision and scale
);
-- Inserting Data into the Table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00), -- Date format is 'YYYY-MM-DD'
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00), -- Date format is 'YYYY-MM-DD'
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00) -- Date format is 'YYYY-MM-DD';
-- Querying the Data from the Table
); 
SELECT * FROM Employees; -- Select all columns and all rows
SELECT FirstName, LastName, Email FROM Employees; -- Select specific columns





-- 1. Department Table
CREATE TABLE Department (
    DeptID INT AUTO_INCREMENT PRIMARY KEY,
    DeptName VARCHAR(100) UNIQUE NOT NULL
);

-- 2. Student Table
CREATE TABLE Student (
    StudentID VARCHAR(10) PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL
);

-- 3. Course Table
CREATE TABLE Course (
    CourseID INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- 4. Instructor Table
CREATE TABLE Instructor (
    InstructorID INT AUTO_INCREMENT PRIMARY KEY,
    InstructorName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- 5. Enrollment Table (Junction Table)
CREATE TABLE Enrollment (
    EnrollmentID INT AUTO_INCREMENT PRIMARY KEY,
    StudentID VARCHAR(10),
    CourseID INT,
    InstructorID INT,
    Grade CHAR(2),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);
















