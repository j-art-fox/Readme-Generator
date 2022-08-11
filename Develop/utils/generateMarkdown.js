const inquirer = require('inquirer');
const fs = require('fs');


//Should the questions we prompt reflect what a big project's readme format looks like or should it reflect what our graders are looking for when they see our readme files?
//template literal

    
    // In my .then((response)) can I specify a directory to save it so I don't  save over my readme for the project?
    // How can I modify the output to reflect a markdown's formatting?
    // what does join() do?
    

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  // 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${(data.installation)}

## Usage

${(data.usage)}

## License

${renderLicenseBadge(data.license)}

## Contributing


## Tests



## Questions

`;
}

module.exports = generateMarkdown;



