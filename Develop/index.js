// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description about your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information of your project'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the contribution guidelines of your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the test instructions of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will your project use?',
        choices: ['MIT', 'GPL', 'Apache', 'Other']
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers))
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
