function foo() {
    console.log(this.fooValue);
    this.fooValue = "foo for fooValue";
}

function bar() {
    console.log(this.barValue);
    this.barValue = "bar for barValue";
    return {bazValue: "baz"};
}

var objFoo = {fooValue: 'foo', foo: foo};
var objBar = {barValue: 'bar', bar: bar};

var returnFromObjFoo = objFoo.foo();
var returnFromObjBar = objBar.bar();

console.log(objFoo.fooValue);
console.log(objBar.barValue);
console.log(returnFromObjFoo);
console.log(returnFromObjBar);

console.log("-------------");

var returnFromObjFoo1 = new foo();
var returnFromObjBar1 = new bar();

console.log(objFoo.fooValue);
console.log(objBar.barValue);
console.log(returnFromObjFoo1);
console.log(returnFromObjBar1);