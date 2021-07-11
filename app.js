const mysql = require("mysql2");
const inquirer = require('inquirer');
const cTable = require('console.table');
const dbData = require('./db/connection'); 


// TODO: Create an array of questions for user input
const questions = [
  {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
      validate: projectTitleInput => {
          if (projectTitleInput){
              return true;
          } else {
              console.log('Please enter your project title.');
              return false;
          }
      }
  },
  {
      type: "input",
      name: "description",
      message: "Please provide a description of your project"
  },
  {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions for your project"
  },
  {
      type: "input",
      name: "usage",
      message: "Please provide the projects usage"
  },
  {
      type: "input",
      name: "credits",
      message: "Please provide information on all parties contributions"
  },
  {
      type: "checkbox",
      name: "license",
      message: "Please choose the project license",
      choices: ['BSD 3-Clause', 'EPL-2.0', 'Apache License 2.0', 'MIT', 'Mozilla Public License 2.0'],
      validate: projectLicense => {
          if (projectLicense){
              return true;
          } else {
              console.log('Please enter your project license.');
              return false;
          }
      }
  },
  {
      type: "input",
      name: "badges",
      message: "Please provide the links for any attained badges"
  },
  {
      type: "input",
      name: "features",
      message: "Please provide information on the features of your project"
  },
  {
      type: "input",
      name: "contributing",
      message: "Please provide information for contributors"
  },
  {
      type: "input",
      name: "test",
      message: "Please provide test on your project"
  },
  {
      type: "input",
      name: "questions",
      message: "please provide your GIThub username and link to your Github profile",
      validate: githubUsernameLink => {
          if (githubUsernameLink){
              return true;
          } else {
              console.log('Please enter your Github username and profile link.');
              return false;
          }
      }
  }

];


function init() {

}

init();
// // EDIT Questions and Roles and fix issue with error (node:25432 connection is not defined)
// function start() {
//     inquirer.prompt({
//       type: "list",
//       name: "action",
//       message: "What would you like to do?",
//       choices: [
//         "View All Employees",
//         "View All Employees By Department",
//         "View All Employees By Role",
//         "Add Employee",
//         "Add Department",
//         "Add Role",
//         "Update Employee Role"
//       ]
//     }).then(function (answer) {
//       switch (answer.action) {
//         // Variety of cases that fire a function depending on the selection from prompt
//         case "View All Employees":
//           viewEmployees();
//           break;
  
//         case "View All Employees By Department":
//           viewDepartment();
//           break;
  
//         case "View All Employees By Role":
//           viewRole();
//           break;
  
//         case "Add Employee":
//           addEmployee();
//           break;
  
//         case "Add Department":
//           addDepartment();
//           break;
  
//         case "Add Role":
//           addRole();
//           break;
  
//         case "Update Employee Role":
//           updateRole();
//           break;
//       }
//     });
//   }
  
//   // Functions to perform tasks depending on user selection from above inquirer prompt
//   function viewEmployees() {
//     var query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON role.id = employee.role_id INNER JOIN department ON role.department_id = department.id ORDER BY employee.id ASC";
//     connection.query(query, function (err, res) {
//       if (err) throw err;
//       console.table('\n', res);
//     })
//     start();
//   }
  
//   function viewDepartment() {
//     var query = "SELECT * FROM department";
//     connection.query(query, function (err, res) {
//       if (err) throw err;
//       console.table('\n', res);
//     })
//     start();
//   };
  
//   function viewRole() {
//     var query = "SELECT * FROM role";
//     connection.query(query, function (err, res) {
//       if (err) throw err;
//       console.table('\n', res);
//     })
//     start();
//   };
  
//   function addEmployee() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "first_name",
//         message: "Please enter employee's first name:"
//       },
//       {
//         type: "input",
//         name: "last_name",
//         message: "Please enter employee's last name:"
//       },
//       {
//         type: "input",
//         name: "role",
//         message: "Please enter role:"
//       }
//     ]).then(function (answer) {
//       var query = "INSERT INTO employee SET ?";
//       connection.query(query,
//         {
//           first_name: answer.first_name,
//           last_name: answer.last_name,
//           role_id: answer.role
//         }, function (err, res) {
//           if (err) throw err;
//           console.table('\n', res);
//         });
//       start();
//     })
//   }
  
//   function addDepartment() {
//     inquirer.prompt({
//       type: "input",
//       name: "department",
//       message: "Please enter the department you would like to add:"
//     }).then(function (answer) {
//       connection.query("INSERT INTO department SET ?",
//         {
//           name: answer.department
//         },
//         function (err) {
//           if (err) throw err;
//           console.log("The department was added successfully!");
//           start();
//         });
//     })
//   }
  
//   function addRole() {
//     inquirer.prompt({
//       type: "input",
//       name: "role",
//       message: "Please enter the role you would like to add:"
//     }).then(function (answer) {
//       connection.query("INSERT INTO role SET ?",
//         {
//           title: answer.role
//         },
//         function (err) {
//           if (err) throw err;
//           console.log("The role was added successfully!");
//           start();
//         });
//     })
//   }
  
//   function updateRole() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "first_name",
//         message: "Please enter first name of employee whose role you wish to update:"
//       },
//       {
//         type: "input",
//         name: "last_name",
//         message: "Please enter last name of employee whose role you wish to update:"
//       }
//     ]).then(function ({ first_name, last_name }) {
//       var query = "UPDATE employee SET role_id"
//       connection.query()
//     })
//   }
  
//   start();