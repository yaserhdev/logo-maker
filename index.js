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
                choices: ['Circle', 'Triangle', 'Square']
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
    // Function to generate SVG markup
    generateSVG() {
        this.textColor = this.answers[`text-color`];
        this.shapeColor = this.answers['shape-color'];
        return
        `<svg width="200" height="200">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>
            ${this.shape === 'Circle' ? `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}" />` : ''}
            ${this.shape === 'Triangle' ? `<polygon points="50,15 100,100 0,100" fill="${this.shapeColor}" />` : ''}
            ${this.shape === 'Square' ? `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />` : ''}
        </svg>`;
    }
    // Function to write SVG file
    writeSVG() {
        const markup = this.generateSVG();
        fs.writeToFile('logo', markup, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
            } else {
                console.log(`SVG file saved as ${'logo'}`)
            }
        })
    }
};

// Create new instance of logo class and call method to get user input
const output = new Logo();
output.logoPrompt().then((answers) => {
    console.log(answers);
});