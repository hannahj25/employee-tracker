const connectDb = require('../db/connection.js');



// get employee table
async function getEmployees() {
    const db = await connectDb();
    const result = await db.query('SELECT * FROM employee');
    console.log(result);
    
    
}

// add employee to table

//update employee role



//delete employee - bonus

module.exports = {getEmployees}