USE FOODINIT;

CREATE TABLE IF NOT EXISTS Customer (
	customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_Name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    phone VARCHAR (10) NOT NULL,
    funds DECIMAL (10,2) NOT NULL,
    total_spendings DECIMAL (10,2) NOT NULL,
    email_id VARCHAR (50) NOT NULL,
    pass VARCHAR (20) NOT NULL,
    CHECK (length(pass) >= 8),
    vip_status VARCHAR (3) NOT NULL default "NOT"
);
DROP TABLE Customer;
INSERT INTO Customer (
	customer_id, first_name, 
    last_name, phone, funds, 
    total_spendings, email_id,
    pass
)
VALUES (1, 'Mumtahid', 'Akash', '9294353796', 35, 0, 'makash@gmail.com', 'a1b2c3d4');
INSERT INTO Customer (
	customer_id, first_name, 
    last_name, phone, funds, 
    total_spendings, email_id,
    pass
)
VALUES (2, 'MD', 'Hossain', '9175184400', 15, 10, 'arafath@gmail.com', 'ABCDEFGH');
INSERT INTO Customer (
	customer_id, first_name, 
    last_name, phone, funds, 
    total_spendings, email_id,
    pass
)
VALUES (3, 'Sajid', 'Mahmud', '6465451125', 65, 80, 'saqib_mahmud@gmail.com', '12345678');
INSERT INTO Customer (
	 first_name, 
    last_name, phone, funds, 
    total_spendings, email_id,
    pass
)
VALUES ('Anvinh', 'Mahmud', '6465451125', 65, 80, 'saqib_mahmud@gmail.com', '12345678');
INSERT INTO Customer (
	 first_name, 
    last_name, phone, funds, 
    total_spendings, email_id,
    pass
)
VALUES ('Myriam', 'yumbla', '9294267390', 15, 10, 'smysdj@yahoo.com', '3q445casFf');

CREATE TABLE IF NOT EXISTS Customer_Address (
	address_id INT AUTO_INCREMENT PRIMARY KEY,
    street_address VARCHAR (50) NOT NULL,
    zipcode INT NOT NULL,
    state CHAR (2) NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customer (customer_id)
);
DROP TABLE Customer_address;

CREATE TABLE IF NOT EXISTS Manager (
	manager_id INT AUTO_INCREMENT PRIMARY KEY ,
    manager_first_name VARCHAR (20) NOT NULL,
    manager_last_name VARCHAR (20) NOT NULL,
    manager_email VARCHAR (50) NOT NULL,
    manager_password VARCHAR (20) NOT NULL,
    CHECK (length (manager_password) >= 8)
 );
DROP TABLE Manager;

INSERT INTO Manager (manager_first_name, manager_last_name, manager_email, manager_password)
VALUES ('Sakai', 'Gin', 'sakaigin@yahoo.com', 'sakaigin1');
INSERT INTO Manager (manager_first_name, manager_last_name, manager_email, manager_password)
VALUES ('Sakata', 'Gintoki', 'sakaigintoki@gmail.com', 'sakaigintoki1');

CREATE TABLE IF NOT EXISTS Employee (
	employee_id INT AUTO_INCREMENT PRIMARY KEY,
    employee_first_name VARCHAR (20) NOT NULL,
    employee_last_name VARCHAR (20) NOT NULL,
    employee_position VARCHAR (20) NOT NULL,
    employee_salary INT NOT NULL
);
DROP TABLE Employee;

INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Sakurajima', 'Mai', 'Chef', 25000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Vinsmoke', 'Sanji', 'Chef', 45000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Anos', 'Voldigoad', 'Delivery Person', 10000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Mao', 'Sama', 'Cashier', 15000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Sakura', 'Matou', 'Chef', 30000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Nasa', 'Yuzaki', 'Cashier', 10000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Roronoa', 'Zoro', 'Janitor', 20000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Saeko', 'Busujima', 'Waiter', 55000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Okabe', 'Rintarou', 'Waiter', 50000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Jason', 'Bourne', 'Waiter', 60000);
INSERT INTO Employee (employee_first_name, employee_last_name, employee_position, employee_salary)
VALUES ('Kara', 'Zor el', 'Waiter', 60000);

SELECT * FROM Employee