const inquirer = require('inquirer');
const connectDb = require('../db/connection.js');
const cTable = require('console.table');
let empFirstName, empLastName, empRole, empManager;



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
    await inquirer.prompt(
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
           
            
        ]
    )   
    db.query('SELECT id, title FROM role', (err, response) => {
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
    });

        db.query('Select * FROM employee', (err, response) => {
        if (err) throw err;
        let managerArray = [];
        response.forEach(({ first_name, last_name, id }) => {
            managerArray.push({name: first_name + " " + last_name, value: id})
        });
        inquirer.prompt(
            {
                type: 'list',
                name: 'manager',
                message: `Who is the employee's manager?`,
                choices: managerArray
            }
        )
    })
        empFirstName = answers.firstName;
        empLastName = answers.lastName;
        empRole = answers.role;
        empManager = answers.manager;
        var newEmployee = db.query('INSERT INTO employee SET ?', {
            first_name: empFirstName,
            last_name: empLastName,
            role_id: empRole,
            manager_id: empManager
        })
    

    

}

//update employee role



//delete employee - bonus

module.exports = {getEmployees, addEmployee }