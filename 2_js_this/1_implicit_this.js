function foo() {
    this.bar = "bar from foo";
}

this.bar = "1A"; // "this" is a brand new object. bar = 1A is set on this new object
bar = "1B"; // implicit "this" is the global object. bar = 1B is set on the global object

console.log(this.bar); // prints 1A, taken from the newly created object
console.log(bar); // prints 1B. bar is taken from the implicit "this" which is the global object

foo(); // the function is called on the implicit "this" which is the global object. Changes bar on global

console.log(this.bar); // prints 1A since the newly created object was not modified at all
console.log(bar); // prints "bar from foo". foo modified the bar on the global object

// note: in browser -- this is not a brand new object. this is the global / window object