# Employee Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Built With](#built-with)

- [Future Development](#future-development)

- [License](#license)

- [Contact](#contact)

- [Acknowledgements](#acknowledgements)

## Description
This application is a content management system, designed to manage a company's employee database from the command line.

## Installation
Note: You will need a MySQL account to use this program.

In the .envEXAMPLE file, add your MySQL password and user. Delete 'example' from the file name.

Now, in the command line, install dependencies by running:

 `npm install`


Log in to the MySQL shell and run:

`SOURCE db/schema.sql;`


 ## Usage
You can now start the application with:

 `npm start`

From here, you will be presented with several options, as seen below: 

![screenshot-menu](./assets/images/menuscreenshot.png)

Select how you wish to proceed. If you select one of the "view" options, you will see a table with the relevant data currently contained in the database.

If you select add a department, role or employee, you will be prompted to enter information which will be added to the database. Similarly, if you select "Update employee role", you will be prompted to select an employee and assign him/her a new role.

If you select "exit", the application will stop running.

For further help, the video below demonstrates installation and usage of the app:

https://drive.google.com/file/d/1TKWeLbZlqf9AJDCdT0m8Xh-uT2p0PVKb/view

## Built With
- Node.js
- Inquirer
- MySQL2

## Future Development
Add some extra functionality, especially:

- delete departments, roles and employees
- update an employee's manager
- view employees according to the manager or department they are under
- view the total utilised budger of a department, i.e. the combined salaries of all employees in that department



## License
This project is covered under the MIT license.

For more information see: 
https://opensource.org/licenses/MIT

## Contact
You can direct any questions or feedback you have about the app to:

Email: peterson.hj@outlook.com

GitHub: https://github.com/hannahj25

## Acknowledgements
Resources: 

License badge - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba