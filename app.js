// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown')

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
inquirer
.prompt(questions)
.then(function(data){

      fs.writeFile("README-sample.md", generate(data), function(err) {
        if (err) throw err;
        
        console.log("New README file created with success!");
      });
    
});

function init() {

}

init();