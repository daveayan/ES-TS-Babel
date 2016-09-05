abstract class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    area() {
        console.log("In Shape::area - " + this.name);
        var calculatedArea: number = 0;
        console.log("-- Shape::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
}

class Square extends Shape {
    width: number;

    constructor(name: string, width: number) {
        super(name);
        this.width = width;
    }
    area() {
        console.log("In Square::area - " + this.name);

        var calculatedArea = (this.width * this.width) + super.area();

        console.log("-- Square::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
    perimeter() {
        console.log("In Square::perimeter - " + this.name);

        var calculatedPerimeter = 2 * (this.width + this.width);

        console.log("-- Square::perimeter - " + this.name + " = " + calculatedPerimeter);
        return calculatedPerimeter;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    area() {
        console.log("In Circle::area - " + this.name);

        var calculatedArea = (3.14 * this.radius * this.radius) + super.area();

        console.log("-- Circle::area - " + this.name + " = " + calculatedArea);
        return calculatedArea;
    }
    circumference() {
        console.log("In Circle::circumference - " + this.name);

        var calculatedCircumference = (2 * 3.14 * this.radius);

        console.log("-- Circle::circumference - " + this.name + " = " + calculatedCircumference);
        return calculatedCircumference;
    }
}

//let shape1 = new Shape("Generic Shape 1");
//let shape2 = new Shape("Generic Shape 2");
//
//shape1.area();
//shape2.area();

console.log("-------");

let square1 = new Square("Square 1", 5);
let square2 = new Square("Square 2", 6);

square1.area();
square2.area();
square1.perimeter();
square2.perimeter();

console.log("-------");

let circle1 = new Circle("Circle 1", 3);
let circle2 = new Circle("Circle 2", 4);

circle1.area();
circle2.area();
circle1.circumference();
circle2.circumference();