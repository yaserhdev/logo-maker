// Import inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');
// Import shape classes
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

// Prompt user input for  text, text color, shape, and shape color
async function logoPrompt() {
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
            name: 'textColor',
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
            name: 'shapeColor',
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

// Call logo prompt and generate logo based on user input
logoPrompt().then((answers) => {
    if (answers.shape === 'Circle') {
        const circle = new Circle(answers.text, answers.textColor, answers.shapeColor);
        try {
            fs.writeFileSync('./examples/circle.svg', circle.render());
            console.log(`Successfully created circle.svg in the /examples directory!`);
        } catch (err) {
            console.error('Error writing SVG file:', err);
        }
    } else if  (answers.shape === 'Triangle') {
        const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        try {
            fs.writeFileSync('./examples/triangle.svg', triangle.render());
            console.log(`Successfully created triangle.svg in the /examples directory!`);
        } catch (err) {
            console.log('Error writing SVG file:', err)
        }
    } else {
        const square = new Square(answers.text, answers.textColor, answers.shapeColor);
        try {
            fs.writeFileSync('./examples/square.svg', square.render());
            console.log(`Successfully created square.svg in the /examples directory!`);
        } catch (err) {
            console.log('Error writing SVG file:', err)
        }
    }
});