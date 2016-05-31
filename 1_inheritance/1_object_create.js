var Shape = Object.create(Object.prototype);
Shape.create = function(name) {
    console.log("Shape::create " + name);

    var self = Object.create(this);
    self.name = name;

    console.log("-- Shape::created " + self.name);
    return self;
};

Shape.area = function() {
    console.log("In Shape::area - " + this.name);
    var calculatedArea = 0;
    console.log("-- Shape::area " + this.name + " = " + calculatedArea);
    return calculatedArea;
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Square = Object.create(Shape);
Square.create = function(name, width) {
    console.log("Square::create - " + name);

    var createdObj = Shape.create.call(this, name);
    createdObj.width = width;

    console.log("-- Square::created " + createdObj.name);
    return createdObj;
};

Square.area = function() {
    console.log("In Square::area - " + this.name);

    var areaFromSuper = Shape.area.call(this);
    var calculatedArea = (this.width * this.width) + areaFromSuper;

    console.log("-- Square::area - " + this.name + " = " + calculatedArea);
    return calculatedArea;
};

Square.perimeter = function() {
    console.log("In Square::perimeter - " + this.name);

    var calculatedPerimeter = 2 * (this.width + this.width);

    console.log("-- Square::perimeter - " + this.name + " = " + calculatedPerimeter);
    return calculatedPerimeter;
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Circle = Object.create(Shape);
Circle.create = function(name, radius) {
    console.log("Circle::create - " + name);

    var createdObj = Shape.create.call(this, name);
    createdObj.radius = radius;

    console.log("-- Circle::created " + createdObj.name);
    return createdObj;
};

Circle.area = function() {
    console.log("In Circle::area - " + this.name);

    var areaFromSuper = Shape.area.call(this);
    var calculatedArea = (3.14 * this.radius * this.radius) + areaFromSuper;

    console.log("-- Circle::area - " + this.name + " = " + calculatedArea);
    return calculatedArea;
};

Circle.circumference = function() {
    console.log("In Circle::circumference - " + this.name);

    var calculatedCircumference = (2 * 3.14 * this.radius);

    console.log("-- Circle::circumference - " + this.name + " = " + calculatedCircumference);
    return calculatedCircumference;
};

// ----- ----- ----- ----- ----- ----- ----- -----

var shape1 = Shape.create("generic shape 1");
var shape2 = Shape.create("generic shape 2");

shape1.area();
shape2.area();

console.log("-------");

var square1 = Square.create("Square 1", 5);
var square2 = Square.create("Square 2", 6);

square1.area();
square2.area();
square1.perimeter();
square2.perimeter();

console.log("-------");

var circle1 = Circle.create("Circle 1", 3);
var circle2 = Circle.create("Circle 2", 4);

circle1.area();
circle2.area();
circle1.circumference();
circle2.circumference();

// notes
// 1. new is not used to create new objects