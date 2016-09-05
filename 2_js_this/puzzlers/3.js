function foo() {
    this.count++;
}

this.count = 0;

new foo();
new foo();
new foo();

console.log(this.count);