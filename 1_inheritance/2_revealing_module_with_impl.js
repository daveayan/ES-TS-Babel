var Shape = function(name) {
    var ShapeImpl = {
        area: function () {
            console.log("In ShapeImpl::area - " + this.name);
            var calculatedArea = 0;
            console.log("-- ShapeImpl::area " + this.name + " = " + calculatedArea);
            return calculatedArea;
        }
    };

    function _createObject(_name) {
        console.log("In Shape::createObject");
        var newObject = {
            name: _name,
            area: ShapeImpl.area
        };
        console.log("-- In Shape::createdObject" + newObject.name);
        return newObject;
    }

    return _createObject(name);
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Square = function(name, width) {
    var SquareImpl = {
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
        }
    };

    function _createObject(_name, _width) {
        console.log("In Square::createObject");

        var newObject = new Shape();

        newObject.name = _name;
        newObject.width = _width;

        newObject._superArea = newObject.area;
        newObject.area = SquareImpl.area;
        newObject.perimeter = SquareImpl.perimeter;

        console.log("-- In Square::createdObject" + newObject.name);
        return newObject;
    }

    return _createObject(name, width);
};

// ----- ----- ----- ----- ----- ----- ----- -----

var Circle = function(name, radius) {
    var CircleImpl = {
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
        }
    };

    function _createObject(_name, _radius) {
        console.log("In Circle::createObject");

        var newObject = new Shape();

        newObject.name = _name;
        newObject.radius = _radius;

        newObject._superArea = newObject.area;
        newObject.area = CircleImpl.area;
        newObject.circumference = CircleImpl.circumference;

        console.log("-- In Circle::createdObject" + newObject.name);
        return newObject;
    }

    return _createObject(name, radius);
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