"use strict";

/* eslint-disable require-jsdoc */
var dotenv = require('dotenv');

var _require = require('pg'),
    Pool = _require.Pool;

var createTableQuery = require('./createTables');

var dropTableQuery = require('./dropTables');

dotenv.config();
var pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on('connect', function () {
  console.log('connected to the db');
});

var createTables = function createTables() {
  pool.query(createTableQuery).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var dropTables = function dropTables() {
  pool.query(dropTableQuery).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

pool.on('remove', function () {
  console.log('client removed');
  process.exit(0);
});
module.exports = {
  createTables: createTables,
  dropTables: dropTables
};

require('make-runnable');