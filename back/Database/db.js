require("dotenv").config();
const mysql = require("mysql2");

const host = process.env.DB_HOST || "localhost";

const user = process.env.DB_USER || "kimhelp";
const password = process.env.DB_PASSWORD || "RLAehdna12@";

const database = process.env.DB_DATABASE || "block";

const config = { host, user, password, database };
const pool = mysql.createPool(config);
const promisePool = pool.promise();
exports.pool = promisePool;
