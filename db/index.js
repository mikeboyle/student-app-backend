const pgp = require('pg-promise')();


require('dotenv').config();


const databaseUrl = process.env.DB_URL;


const cn = {
  connectionString: databaseUrl,
  allowExitOnIdle: true,
  max: 30,
};


const db = pgp(cn);


module.exports = db;
