function Person1(age) {
    this.age = age
    var _this = this;  // capture this
    this.growOld = function() {
        _this.age++;   // use the captured this
    }
}
var person1 = new Person1(1);
setTimeout(person1.growOld,1000);
setTimeout(function() { console.log(person1.age); },2000); // 2

function Person2(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}
var person2 = new Person2(1);
setTimeout(person2.growOld,1000);

setTimeout(function() { console.log(person2.age); },2000); // 2