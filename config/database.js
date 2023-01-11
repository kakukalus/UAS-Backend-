// TODO 3: SETUP CONFIG DATABAS
const mysql = require("mysql");

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
db.connect((err) => {
  if (err) {
    console.log(`db connection failed error: ${err.stack}`);
  } else {
    console.log(`db connection success`);
  }
});

module.exports = db;
