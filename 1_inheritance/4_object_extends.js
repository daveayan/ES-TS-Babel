Object.prototype.extend = function (extension) {
    console.log("Object::extend");
    var hasOwnProperty = Object.hasOwnProperty;
    var object = Object.create(this);

    for (var property in extension) {
        if (hasOwnProperty.call(extension, property) || typeof object[property] === "undefined") {
            object[property] = extension[property];
        }
    }

    return object;
};

var Shape = Object.extend({
    area: function() {
        console.log("In ShapeImpl::area - " + this.name);
        var calculatedArea = 0;
        console.log("-- ShapeImpl::area " + this.name + " = " + calculatedArea);
        return calculatedArea;
    },

    createObject: function(_name) {
        console.log("In Shape::createObject");
        var newObject = {
            name: _name,
            area: Shape.area
        };
        console.log("-- In Shape::createdObject" + newObject.name);
        return newObject;
    }
});

var Square = Shape.extend({
    area: function() {
        console.log("In Square::area - " + this.name);

        var areaFromSuper = this._superArea();
        var calculatedArea = (this.width * this.width) + areaFromSuper;

        console.log("-- Square::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    },
    perimeter: function() {
        console.log("In Square::perimeter - " + this.name);

        var calculatedPerimeter = 2 * (this.width + this.width);

        console.log("-- Square::perimeter - " + this.name + " = " + calculatedPerimeter);
        return calculatedPerimeter;
    },
    createObject: function(_name, _width) {
        console.log("In Square::createObject");

        var newObject = Shape.createObject.call(this, _name);

        newObject.name = _name;
        newObject.width = _width;

        newObject._superArea = newObject.area;
        newObject.area = Square.area;
        newObject.perimeter = Square.perimeter;

        console.log("-- In Square::createdObject" + newObject.name);
        return newObject;
    }
});

var Circle = Shape.extend({
    area: function() {
        console.log("In Circle::area - " + this.name);

        var areaFromSuper = this._superArea();
        var calculatedArea = (3.14 * this.radius * this.radius) + areaFromSuper;

        console.log("-- Circle::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    },
    circumference: function() {
        console.log("In Circle::circumference - " + this.name);

        var calculatedCircumference = (2 * 3.14 * this.radius);

        console.log("-- Circle::circumference - " + this.name + " = " + calculatedCircumference);
        return calculatedCircumference;
    },
    createObject: function(_name, _radius) {
        console.log("In Circle::createObject");

        var newObject = Shape.createObject.call(this, _name);

        newObject.name = _name;
        newObject.radius = _radius;

        newObject._superArea = newObject.area;
        newObject.area = Circle.area;
        newObject.circumference = Circle.circumference;

        console.log("-- In Circle::createdObject" + newObject.name);
        return newObject;
    }
});

var shape1 = Shape.createObject("generic shape 1");
var shape2 = Shape.createObject("generic shape 2");

shape1.area();
shape2.area();

console.log("-------");

var square1 = Square.createObject("Square 1", 5);
var square2 = Square.createObject("Square 2", 6);

square1.area();
square2.area();
square1.perimeter();
square2.perimeter();

console.log("-------");

var circle1 = Circle.createObject("Circle 1", 3);
var circle2 = Circle.createObject("Circle 2", 4);

circle1.area();
circle2.area();
circle1.circumference();
circle2.circumference();