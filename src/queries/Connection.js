const mysql = require('mysql');

export const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "pass",
    database: "DB"
});
