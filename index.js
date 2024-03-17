// Import inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

// Define logo class
class Logo {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    // Prompt user input for  text, text color, shape, and shape color
    async logoPrompt() {
        const questions = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter between 1-3 characters for your logo text:',
                validate: (value) => {
                    if (value.length <= 3) {
                        return true;
                    } else {
                        return 'Text must be between 1-3 characters'
                    }
                }
            },
            {
                type: 'input',
                name: 'text-color',
                message: 'Enter the desired text color:',
                validate: (value) => {
                    if (value.length > 0) {
                        return true;
                    } else {
                        return 'Please provide color'
                    }
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape:',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                name: 'shape-color',
                message: 'Enter the desired shape color:',
                validate: (value) => {
                    if (value.length > 0) {
                        return true;
                    } else {
                        return 'Please provide a color'
                    }
                }
            },
        ]
        return await inquirer.prompt(questions);
    };
};

// Create new instance of logo class and call method to get user input
const output = new Logo();
output.logoPrompt().then((answers) => {
    console.log(answers);
});