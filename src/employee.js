const inquirer = require('inquirer');
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
    
    // db.query('Select * FROM employee', (err, response) => {
    //     if (err) throw err;
    //     let managerArray = [];
    //     response.forEach(({ first_name, last_name, id }) => {
    //         managerArray.push({name: first_name + " " + last_name, value: id})
    //     });
    // });
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'firstName',
                message: `Enter the employee's first name.`
            },
            {
                type: 'input',
                name: 'lastName',
                message: `Enter the employee's last name.`
            },
           
            // {
            //     type: 'list',
            //     name: 'manager',
            //     message: `Who is the employee's manager?`,
            //     choices: managerArray
            // }
        ]
    )
    .then(answer => {
        db.promise().query('INSERT INTO employee SET ?', {
            first_name: answer.firstName,
            last_name: answer.lastName,
        });
    })
    
    db.promise().query('SELECT id, title FROM role', (err, response) => {
        if (err) throw err;
        let roleArray = [];
        response.forEach(({title, id}) => {
            roleArray.push({name: title, value: id})
        });
        inquirer.prompt(
             {
                type: 'list',
                name: 'role',
                message: 'Which role is this employee assigned to?',
                choices: roleArray
            },
        )
        .then(answer => {
            db.promise().query('INSERT INTO employee SET ?', {
                role: answer.role
            });
        })
    });
}

//update employee role



//delete employee - bonus

module.exports = {getEmployees, addEmployee }