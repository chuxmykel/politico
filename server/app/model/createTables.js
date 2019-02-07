const createPartyTable = `
  CREATE TABLE parties(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) UNIQUE,
    hqAddress VARCHAR(150) UNIQUE,
    logoUrl VARCHAR(70) UNIQUE);`;

const createOfficeTable = `
  CREATE TABLE offices(
    id SERIAL PRIMARY KEY,
    type VARCHAR(45) UNIQUE,
    name VARCHAR(30) );`;


const createTables = `${createPartyTable}${createOfficeTable}`;

module.exports = createTables;
