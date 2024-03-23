const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

describe('Triangle', () => {
    describe('blue', () => {
        it('should create a blue triangle', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Square', () => {
    describe('red', () => {
        it('should create a red square', () => {
            const square = new Square();
            square.setColor("red");
            expect(square.render()).toEqual('<rect x="10" y="10" fill="red" />');
        });
    });
});


describe('Circle', () => {
    describe('green', () => {
        it('should create a green circle', () => {
            const circle = new Circle();
            circle.setColor("green");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
        });
    });
});