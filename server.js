const inquirer = require("inquirer");
const { getEmployees, addEmployee, updateEmployeeRole } = require("./src/employee.js");
const { getRoles, addRole } = require("./src/role.js");
const { getDepartments, addDepartment } = require("./src/department.js");

async function main() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View departments",
          "View roles",
          "View employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update employee role",
        ],
      },
    ])
    .then(async (answer) => {
      switch (answer.menu) {
        case "View departments":
          await getDepartments();
          break;
        case "View roles":
          await getRoles();
          break;
        case "View employees":
          await getEmployees();
          break;
        case "Add department":
          await addDepartment();
          break;
        case "Add role":
          await addRole();
          break;
        case "Add employee":
          await addEmployee();
          break;
        case "Update employee role":
          await updateEmployeeRole();
          break;
      }
      main();
    });
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
