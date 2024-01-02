const inquirer = require('inquirer');
const fs = require('fs');
const emailValidator = require("email-validator");
emailValidator.validate("test@email.com");

const readMeVariables = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a valid project title.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a valid project description.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of your project?',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter the intended usage of your project.");
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to use a license?',
        choices:['None', 'MIT License', 'Apache License 2.0', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who is contributing to your project?',
        validate: (contributingInput) => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please enter any contributing partners or type in none.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you done on your project?',
        validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please enter what tests you've done or type in none.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
        validate: (userNameInput) => {
            if (userNameInput) {
                return true;
            } else {
                console.log("Please enter a valid username.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (emailInput) => {
            if (emailValidator.validate(emailInput)) {
                return true;
            } else {
                return false;
            }
        },
        
    }
]

function initReadMeFile() {
    inquirer
        .prompt(readMeVariables)
        .then((answers) => {
            fs.writeFile
        })
        // todo fs.writefile
        fs.writeFile('README.md',)
}

initReadMeFile();