// import using require
var Shape = require('./shape.js');
// declare class
class Circle extends Shape {
     constructor(color, radius) {
          super(color);
          this.radius = radius;
     }
     calculateArea() {
        return Math.PI*(this.radius*this.radius);
     }
}

// export class using module.exports
module.exports = Circle;