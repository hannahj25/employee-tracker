const inquirer = require('inquirer');
const { getEmployees } = require('./src/employee.js');



async function main() {
getEmployees();

}

main();

// on start user sees options (view dep, roles, emps; add dep, role, emp; upd emp role)

  // on select view dep, return table w dep names and ids
   
  // on select view roles, return table w job title, role id, dep of role, salary

  // on select view emps, return table w employee data

  //on add department, user enter name of dep and dep is added to department table

  // on add role, user enter name, salary and dep and role is added to roles table

  // on add emp, user enter employee first & last names, role and manager, emp is added to emp table

  // on update emp role, user select emp to update, select(enter?) new role and info is updated in database