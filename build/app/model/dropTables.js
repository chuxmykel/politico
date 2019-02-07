"use strict";

var dropParties = 'DROP TABLE IF EXISTS parties; ';
var dropOffices = 'DROP TABLE IF EXISTS offices; ';
var dropTables = "".concat(dropParties).concat(dropOffices);
module.exports = dropTables;