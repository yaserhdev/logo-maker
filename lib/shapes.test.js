const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual('<rect x="10" y="10" fill="red" />');

const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');