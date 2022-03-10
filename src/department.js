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
    inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'What department would you like to add?'
    })
    .then(answer => {
        var newEmp = db.query('INSERT INTO department (`name`) VALUES (?)', `${departmentName}`, (err) => {
            if (err) throw err;
            console.log(`Added ${departmentName} to the database.`);
        })
    })
};

module.exports = {getDepartments, addDepartment}