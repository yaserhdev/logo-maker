class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setColor(textColor) {
        this.textColor = textColor;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    render() {
        throw new Error('Child must create render')
    }
}

module.exports = Shape;