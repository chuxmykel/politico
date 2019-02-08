"use strict";

var dropParties = 'DROP TABLE IF EXISTS parties; ';
var dropOffices = 'DROP TABLE IF EXISTS offices; ';
var dropUsers = 'DROP TABLE IF EXISTS users; ';
var dropTables = "".concat(dropParties).concat(dropOffices).concat(dropUsers);
module.exports = dropTables;