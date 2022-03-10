const inquirer = require('inquirer');
const connectDb = require('../db/connection.js');
const cTable = require('console.table');
const { getDepartments } = require('./department.js');



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
    const departments = await db.query('SELECT id, name FROM department');
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'roleTitle',
                message: 'Enter the role you would like to add.'
            },
            {
                type: 'number',
                name: 'salary',
                message: 'What is the salary for this role?'
            },
            {
                type: 'list',
                name: 'department',
                message: 'Which department does this role belong to?',
                choices: departments.map((row) => ({name: row.name, value: row.id}))
            }
        ]
    )
    .then(answer => {
        var newRole = db.query('INSERT INTO role (title, salary, department_id) VALUES (?)', answer.roleTitle, answer.salary, answer.department, (err) => {
            if (err) throw err;
            else {
            console.log(`Added ${answer.roleTitle} to the database.`);
            };
        })
    })
    

    
}


module.exports = {getRoles, addRole}