const connectDb = require('../db/connection.js');
const cTable = require('console.table');



// get employee table
async function getEmployees() {
    const db = await connectDb();
    const result = await db.query('SELECT * FROM employee');
    console.table(result);
    
    
}

// add employee to table

//update employee role



//delete employee - bonus

module.exports = {getEmployees}