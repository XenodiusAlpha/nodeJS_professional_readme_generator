const readMeVariables = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of your project?',
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
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have you done on your project?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
]