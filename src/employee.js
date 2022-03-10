const connectDb = require('../db/connection.js');
const cTable = require('console.table');



// get employee table
async function getEmployees() {
    const db = await connectDb();
    const [result] = await db.promise().query('SELECT * FROM employee');
    console.log(result);
    console.table(result);
    
    
}

// add employee to table

async function addEmployee() {
    const db = await connectDb();
    

    const newEmployee = await db.query('INSERT INTO employee (${firstName}, ${lastName}, ${roleId})');
}

//update employee role



//delete employee - bonus

module.exports = {getEmployees}