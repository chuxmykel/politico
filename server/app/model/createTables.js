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

const createUserTable = `
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      firstname VARCHAR(15),
      lastname VARCHAR(15), 
      othername VARCHAR(15),
      email VARCHAR(100),
      phoneNumber VARCHAR(15),
      password VARCHAR(1000),
      passportUrl VARCHAR(60),
      isAdmin VARCHAR(5) );`;


const createTables = `${createPartyTable}${createOfficeTable}${createUserTable}`;

module.exports = createTables;
