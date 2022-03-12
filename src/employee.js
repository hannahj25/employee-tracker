const inquirer = require("inquirer");
const connectDb = require("../db/connection.js");
const cTable = require("console.table");
let empFirstName, empLastName, empRole, empManager;

// get employee table
async function getEmployees() {
  const db = await connectDb();
  const [result] = await db.promise().query("SELECT * FROM employee");
  console.log(result);
  console.table(result);
}

// add employee to table

async function addEmployee() {
  const db = await connectDb();
  const [roles] = await db.promise().query("SELECT id, title FROM role");
  const [managers] = await db
    .promise()
    .query("Select * FROM employee WHERE manager_id is null");

  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: `Enter the employee's first name.`,
      },
      {
        type: "input",
        name: "lastName",
        message: `Enter the employee's last name.`,
      },
      {
        type: "list",
        name: "role",
        message: "Which role is this employee assigned to?",
        choices: roles.map((role) => {
          return {
            name: role.title,
            value: role.id,
          };
        }),
      },
      {
        type: "list",
        name: "manager",
        message: `Who is the employee's manager?`,
        choices: managers
          .map((manager) => {
            return {
              name: manager.first_name + " " + manager.last_name,
              value: manager.id,
            };
          })
          .concat([{ name: "No one", value: null }]),
      },
    ])
    .then((answer) => {
      return db
        .promise()
        .query("INSERT INTO employee SET ?", {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.role,
          manager_id: answer.manager,
        })
        .then(() =>
          console.log(
            `Added ${answer.firstName} ${answer.lastName} to database.`
          )
        );
    });
}

//update employee role
async function updateEmployeeRole() {
  const db = await connectDb();
  const [employees] = await db.promise().query("Select * FROM employee");
  const [roles] = await db.promise().query("SELECT id, title FROM role");
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: `Which employee do you wish to update?`,
        choices: employees.map((employee) => {
          return {
            name: employee.first_name + " " + employee.last_name,
            value: {
              id: employee.id,
              role_id: employee.role_id,
            },
          };
        }),
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's new role?",
        choices: function (ans) {
          // find out the role id that the selected employee has
          const selectedRoleId = ans.employee.role_id;

          return roles
            .filter((role) => role.id !== selectedRoleId)
            .map((role) => {
              return {
                name: role.title,
                value: role.id,
              };
            });
        },
      },
    ])
    .then((answer) => {
      return db
        .promise()
        .query("UPDATE employee SET role_id = ? WHERE id = ?", [
          answer.role,
          answer.employee.id,
        ])
        .then(() =>
          console.log(
            `Updated employee role.`
          )
        );
    });
}
// select an employee
// select a new role
// update role

//delete employee - bonus

module.exports = { getEmployees, addEmployee, updateEmployeeRole };
