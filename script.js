const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: `What is your project's name?`,
            name: 'projectname',
        }
        {
            type: 'input',
            message: 'Please write your name as you would like it to display in the Readme.',
            name: 'username'
        }
    ])
    // In my .then((response)) can I specify a directory to save it so I don't  save over my readme for the project?
    // How can I modify the output to reflect a markdown's formatting?
    // what does join() do?
    .then((response) => {
        fs.writeFileSync(`${response.projectname}README.md`, response);
           
    }
    );
