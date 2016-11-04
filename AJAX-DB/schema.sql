CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL,
    securityQ1 VARCHAR(100) NOT NULL,
    securityA1 VARCHAR(100) NOT NULL,
    securityQ2 VARCHAR(100) NOT NULL,
    securityA2 VARCHAR(100) NOT NULL,
    mobile VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    interests TEXT NOT NULL
);

--Sample Insert--
INSERT INTO users (userName, email,password,securityQ1,securityA1,securityQ2,securityA2,mobile,address,interests) VALUES
('dhanya', 'natr32@gmail.com','abcD123!','What is A?','A','What is B?','B','+912344567890','abc st','abc');
