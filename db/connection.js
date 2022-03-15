const mysql = require('mysql2');

require('dotenv').config();

// Connects mysql to node
async function connectDb() {
return mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    
)
}


module.exports = connectDb;

