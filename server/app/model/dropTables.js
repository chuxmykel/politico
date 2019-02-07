const dropParties = 'DROP TABLE IF EXISTS parties; ';
const dropOffices = 'DROP TABLE IF EXISTS offices; ';

const dropTables = `${dropParties}${dropOffices}`;

module.exports = dropTables;
