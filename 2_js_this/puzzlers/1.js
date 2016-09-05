function foo(num) {
    console.log( "foo: " + num );
    this.count++;
}

foo.count = 0;

foo(1);
foo(2);
foo(3);

console.log(foo.count);