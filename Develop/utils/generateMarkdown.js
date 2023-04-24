// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GPL"){
    return "(https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT"){
    return "This project is licensed under the MIT License - see https://mit-license.org/ for details."
  } else if (license === "Apache") {
   return "This project is licensed under the Apache 2.0 License - see https://www.apache.org/licenses/LICENSE-2.0 for details."
  } else if (license === "GPL"){
    return "This project is licensed under the GPL license - see https://www.gnu.org/licenses/gpl-3.0.html for details."
  } else {
    return ""
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description 
${data.description} 

## Table of contents
- [Go to Installation](#installation) 
- [Go to Usage](#usage) 
- [Go to Contributing](#contributing) 
- [Go to Tests](#tests)
- [Go to License](#license)
- [Got to Questions](#questions)

## Installation
${data.installation}
    
## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Questions

Please checkout my Github account: https://github.com/${data.github} 

Please e-mail me with any further questions:  ${data.email}
`

}

module.exports = generateMarkdown;
