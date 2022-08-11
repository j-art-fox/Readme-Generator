const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'list',
            message: 'What languages do you know?',
            name: 'languages',
            choices: ['ASL', 'Spanish', 'French']
        },
        {
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'method',
            choices: [{name:'phone', value: '📱'}, 'email']
        },
    ])
    .then((response) => {
        fs.writeFileSync(`${response.username}userinfo.txt`, JSON.stringify(response));
        const data = JSON.parse(fs.readFileSync(`${response.username}userinfo.txt`, "utf-8"));
        console.log(data);
    }
    );
