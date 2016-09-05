var o1 = {
    someValue: 1
};

var o2 = Object.create(o1);

console.log("o1 = " + o1.someValue);
console.log("o2 = " + o2.someValue);

o2.someValue ++;

console.log("o1 = " + o1.someValue);
console.log("o2 = " + o2.someValue);

o1.someValue ++;

console.log("o1 = " + o1.someValue);
console.log("o2 = " + o2.someValue);

// Object.create will create a new instance from o1
// After that o2 and o1 are independent objects