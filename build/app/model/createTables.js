"use strict";

var createPartyTable = "\n  CREATE TABLE parties(\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(45) UNIQUE,\n    hqAddress VARCHAR(150) UNIQUE,\n    logoUrl VARCHAR(70) UNIQUE);";
var createOfficeTable = "\n  CREATE TABLE offices(\n    id SERIAL PRIMARY KEY,\n    type VARCHAR(45) UNIQUE,\n    name VARCHAR(30) );";
var createUserTable = "\n    CREATE TABLE users(\n      id SERIAL PRIMARY KEY,\n      firstname VARCHAR(15),\n      lastname VARCHAR(15), \n      othername VARCHAR(15),\n      email VARCHAR(100),\n      phoneNumber VARCHAR(15),\n      password VARCHAR(1000),\n      passportUrl VARCHAR(60),\n      isAdmin VARCHAR(5) );";
var createTables = "".concat(createPartyTable).concat(createOfficeTable).concat(createUserTable);
module.exports = createTables;