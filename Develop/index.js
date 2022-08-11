// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: `What is the title of your project?`,
        name: 'projecttitle',
    },
    {
        type: 'input',
        message: 'Please write your name as you would like it to display in the Readme.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please write a breif description of how your application functions.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe a few problems that your application solves.',
        name: 'solutions',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please write your deployed application URL.',
        name: 'license',
    },
    {
        type: 'input',
        message: 'List your collaborators, any third-party assets that require attribution, creators with links to their primary web presence, as well as tutorials with links here as well.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFileSync(`./Output/README.md`, generateMarkdown(data));
    })
}

// Function call to initialize app
init();
