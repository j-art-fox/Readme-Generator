const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache2':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'BSD 2':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case 'Creative Commons':
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'none':
      return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache2':
      return `[Read More] (https://opensource.org/licenses/Apache-2.0)`
    case 'Boost':
      return `[Read More] (https://www.boost.org/LICENSE_1_0.txt)`
    case 'BSD 3':
      return `[Read More] (https://opensource.org/licenses/BSD-3-Clause)`
    case 'BSD 2':
      return `[Read More] (https://opensource.org/licenses/BSD-2-Clause)`
    case 'Creative Commons':
      return `[Read More] (http://creativecommons.org/publicdomain/zero/1.0/)`
    case 'MIT':
      return `[Read More] (https://opensource.org/licenses/MIT)`
    case 'none':
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `${renderLicenseBadge(license)} ${renderLicenseLink(license)};`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description
${data.description}

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

${renderLicenseSection(data.license)}

## Contributing

${(data.contributing)}

## Tests

${(data.tests)}

## Questions
For questions and concerns, please contact me on either Github or via email using the information below.
GitHub: ${(data.github)}
Email: ${(data.email)}

`;
}

module.exports = generateMarkdown;



