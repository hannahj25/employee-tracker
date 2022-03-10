const connectDb = require('../db/connection.js');
const inquirer = require('inquirer');
const cTable = require('console.table');



// get department table
async function getDepartments() {
    const db = await connectDb();
    const [result] = await db.query('SELECT * FROM department');
    console.log(result);
    console.table(result);
    
    
}

// add department
async function addDepartment() {
    const db = await connectDb();
    inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'Enter the department you would like to add.'
    })
    .then(answer => {
        var newDepartment = db.query('INSERT INTO department (`name`) VALUES (?)', answer.departmentName, (err) => {
            if (err) throw err;
            else {
            console.log(`Added ${answer.departmentName} to the database.`);
            };
        })
    })
};

module.exports = {getDepartments, addDepartment}