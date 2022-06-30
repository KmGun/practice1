const mysql = require("mysql");
const mysqlSecret = require("../secret/mysql.json");
const db = mysql.createConnection(mysqlSecret);
db.connect();

module.exports = db;
