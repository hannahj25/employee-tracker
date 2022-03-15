const inquirer = require("inquirer");
const { getEmployees, addEmployee, updateEmployeeRole } = require("./src/employee.js");
const { getRoles, addRole } = require("./src/role.js");
const { getDepartments, addDepartment } = require("./src/department.js");

// On running npm start, main menu is displayed and functions are run based on user input
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
          "Exit",
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
          case "Exit":
          return process.exit();
      }
      main();
    });
}

main();
