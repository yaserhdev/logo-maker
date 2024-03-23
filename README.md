# logo-maker
Week 10 Challenge

## Description
This week I was given the task of creating a command-line application which accepts user input and returns an svg file based on the input. Users a prompted to enter logo text, text color, logo shape, and shape color. The application contains the following features:

- Enter a text up to 3 characters for your logo 
- Enter a color for your logo text
- Select a shape from the choices of circle, triangle, and square for your logo
- Enter a color for you logo shape
- Generates an svg based on the user input above

## Installation
To install this application, download the repository files and open the root folder in your command line. You will also need Node.js installed. Install all other dependencies using the following command:
```
npm i
```
Then to run the application, use the command: 
```
node index.js
```

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


Application available for download at: https://github.com/yaserhdev/logo-maker

Demo video of application available at: 