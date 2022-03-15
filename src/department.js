const connectDb = require('../db/connection.js');
const inquirer = require('inquirer');
const cTable = require('console.table');



// Get department table
async function getDepartments() {
    const db = await connectDb();
    const [result] = await db.promise().query('SELECT * FROM department');
    console.log(result);
    console.table(result);
    
    
}

// Add new department to database
async function addDepartment() {
    const db = await connectDb();
    return inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the department you would like to add.'
    })
    .then(answer => {
        return db.promise().query('INSERT INTO department (`name`) VALUES (?)', answer.departmentName)
        .then((res) => {
            console.log(`Added ${answer.departmentName} to the database.`);
        })
        .catch((err) => {
            throw err;
        })
            
    })
    
};

module.exports = {getDepartments, addDepartment}