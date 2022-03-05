const mysql = require('mysql2/promise');

require('dotenv').config();

function connectDb() {
return mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    
).catch((err) => console.log(err));
}


module.exports = connectDb;

