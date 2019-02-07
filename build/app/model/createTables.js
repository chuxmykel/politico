"use strict";

var createPartyTable = "\n  CREATE TABLE parties(\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(45) UNIQUE,\n    hqAddress VARCHAR(150) UNIQUE,\n    logoUrl VARCHAR(70) UNIQUE);";
var createOfficeTable = "\n  CREATE TABLE offices(\n    id SERIAL PRIMARY KEY,\n    type VARCHAR(45) UNIQUE,\n    name VARCHAR(30) );";
var createTables = "".concat(createPartyTable).concat(createOfficeTable);
module.exports = createTables;