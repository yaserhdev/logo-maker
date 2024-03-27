const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle');

describe('Triangle', () => {
    describe('blue', () => {
        it('should create a blue triangle', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${triangle.ShapeColor}" width="300" height="200"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`);
        });
    });
});

describe('Square', () => {
    describe('red', () => {
        it('should create a red square', () => {
            const square = new Square();
            square.setColor("red");
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" stroke="black" fill="${square.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`);
        });
    });
});


describe('Circle', () => {
    describe('green', () => {
        it('should create a green circle', () => {
            const circle = new Circle();
            circle.setColor("green");
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`);
        });
    });
});