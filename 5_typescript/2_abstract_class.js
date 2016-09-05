var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.area = function () {
        console.log("In Shape::area - " + this.name);
        var calculatedArea = 0;
        console.log("-- Shape::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    };
    return Shape;
})();
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(name, width) {
        _super.call(this, name);
        this.width = width;
    }
    Square.prototype.area = function () {
        console.log("In Square::area - " + this.name);
        var calculatedArea = (this.width * this.width) + _super.prototype.area.call(this);
        console.log("-- Square::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    };
    Square.prototype.perimeter = function () {
        console.log("In Square::perimeter - " + this.name);
        var calculatedPerimeter = 2 * (this.width + this.width);
        console.log("-- Square::perimeter - " + this.name + " = " + calculatedPerimeter);
        return calculatedPerimeter;
    };
    return Square;
})(Shape);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        _super.call(this, name);
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        console.log("In Circle::area - " + this.name);
        var calculatedArea = (3.14 * this.radius * this.radius) + _super.prototype.area.call(this);
        console.log("-- Circle::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    };
    Circle.prototype.circumference = function () {
        console.log("In Circle::circumference - " + this.name);
        var calculatedCircumference = (2 * 3.14 * this.radius);
        console.log("-- Circle::circumference - " + this.name + " = " + calculatedCircumference);
        return calculatedCircumference;
    };
    return Circle;
})(Shape);
//let shape1 = new Shape("Generic Shape 1");
//let shape2 = new Shape("Generic Shape 2");
//
//shape1.area();
//shape2.area();
console.log("-------");
var square1 = new Square("Square 1", 5);
var square2 = new Square("Square 2", 6);
square1.area();
square2.area();
square1.perimeter();
square2.perimeter();
console.log("-------");
var circle1 = new Circle("Circle 1", 3);
var circle2 = new Circle("Circle 2", 4);
circle1.area();
circle2.area();
circle1.circumference();
circle2.circumference();
//# sourceMappingURL=2_abstract_class.js.map