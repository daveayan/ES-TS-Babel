//var __extends = function (d, b) {
var _protoExtends = function (subClass, parentClass) {

    var objectCreated = Object.create(subClass.prototype);

    for (var property in parentClass) {
        if (! subClass.hasOwnProperty(property)) {
            subClass[property] = parentClass[property];
        }
    }
    function __() {
        this.constructor = subClass;
    }
    subClass.prototype = parentClass === null ? Object.create(parentClass) : (__.prototype = parentClass.prototype, new __());
};

var Shape = function(name) {
    Shape.prototype.area = area {
        console.log("In ShapeImpl::area - " + this.name);
        var calculatedArea = 0;
        console.log("-- ShapeImpl::area " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
    console.log("In Shape::createObject");
    var newObject = {
        name: name,
        area: area
    };
    console.log("-- In Shape::createdObject - " + newObject.name);
    return newObject;
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Square = function(name, width) {
    function area() {
        console.log("In Square::area - " + this.name);

        var areaFromSuper = this._superArea();
        var calculatedArea = (this.width * this.width) + areaFromSuper;

        console.log("-- Square::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
    function perimeter() {
        console.log("In Square::perimeter - " + this.name);

        var calculatedPerimeter = 2 * (this.width + this.width);

        console.log("-- Square::perimeter - " + this.name + " = " + calculatedPerimeter);
        return calculatedPerimeter;
    }

    console.log("In Square::createObject");

    var newObject = new Shape();

    newObject.name = name;
    newObject.width = width;

    newObject._superArea = newObject.area;
    newObject.area = area;
    newObject.perimeter = perimeter;

    console.log("-- In Square::createdObject" + newObject.name);
    return newObject;
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Circle = function(name, radius) {
    function area() {
        console.log("In Circle::area - " + this.name);

        var areaFromSuper = this._superArea();
        var calculatedArea = (3.14 * this.radius * this.radius) + areaFromSuper;

        console.log("-- Circle::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
    function circumference() {
        console.log("In Circle::circumference - " + this.name);

        var calculatedCircumference = (2 * 3.14 * this.radius);

        console.log("-- Circle::circumference - " + this.name + " = " + calculatedCircumference);
        return calculatedCircumference;
    }
    console.log("In Circle::createObject");

    var newObject = new Shape();

    newObject.name = name;
    newObject.radius = radius;

    newObject._superArea = newObject.area;
    newObject.area = area;
    newObject.circumference = circumference;

    console.log("-- In Circle::createdObject" + newObject.name);
    return newObject;
};

var shape1 = new Shape("generic shape 1");
var shape2 = new Shape("generic shape 2");

shape1.area();
shape2.area();

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