// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: `What is your project's name?`,
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Please write your name as you would like it to display in the Readme.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please write a breif description of how your application functions.',
        name: 'function'
    },
    {
        type: 'input',
        message: 'Please describe a few problems that your application solves.',
        name: 'solutions'
    },
    {
        type: 'input',
        message: 'Please write a few things that creating the application taught you.',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'Please write your deployed application URL.',
        name: 'url'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        fs.writeFileSync(`./Output/README.md`, generateMarkdown(data));
    })
}

// Function call to initialize app
init();
