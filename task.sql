DROP DATABASE IF EXISTS task;

CREATE DATABASE task;

USE task;

DROP TABLE IF EXISTS `taskToDo`;
DROP TABLE IF EXISTS `taskDidit`;



CREATE TABLE taskToDo (
  id int NOT NULL AUTO_INCREMENT,
  doIt varchar(300) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE taskDidit (
    id int NOT NULL AUTO_INCREMENT,
    gender_name varchar(300) NOT NULL,
  PRIMARY KEY (id)
);



