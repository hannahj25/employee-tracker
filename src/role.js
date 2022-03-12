const inquirer = require('inquirer');
const connectDb = require('../db/connection.js');
const cTable = require('console.table');
const { getDepartments } = require('./department.js');



// get role table
async function getRoles() {
    const db = await connectDb();
    const [result] = await db.promise().query('SELECT * FROM `role`');
    console.log(result);
    console.table(result);
    
    
}

//add role
async function addRole() {
    const db = await connectDb();
    const [departments] = await db.promise().query('SELECT id, name FROM department');

    return inquirer.prompt(
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
                choices: departments.map((department) => {
                    return {
                        name: department.name,
                        value: department.id,
                    }
                })
            }
        ]
    )
    .then(answer => {
        return db.promise().query('INSERT INTO role SET ?', {
            title: answer.roleTitle,
            salary: answer.salary,
            department_id: answer.department
        })
        .then(() => console.log(`Added ${answer.roleTitle} to database.`));
})
    

    
}


module.exports = {getRoles, addRole}