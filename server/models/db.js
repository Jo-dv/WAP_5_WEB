const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config()

module.exports.start = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.PORT
})