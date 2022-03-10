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
    let deptQuery = 'SELECT id, name FROM department';
    db.query(deptQuery, (err, response) => {
        if (err) throw err;
        let departmentArray = [];
        response.forEach(({name, id}) => {
            departmentArray.push({name: name, value: id})
        })
    
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
                choices: departmentArray
            }
        ]
    )
    .then(answer => {
        db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?)', answer.roleTitle, answer.salary, answer.department);
        console.log(`Added ${answer.roleTitle} to database.`);
    })
})
    

    
}


module.exports = {getRoles, addRole}