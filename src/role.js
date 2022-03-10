const connectDb = require('../db/connection.js');
const cTable = require('console.table');



// get role table
async function getRoles() {
    const db = await connectDb();
    const [result] = await db.query('SELECT * FROM `role`');
    console.log(result);
    console.table(result);
    
    
}

//add role
async function addRole() {
    const db = await connectDb();
    

    
}


module.exports = {getRoles}