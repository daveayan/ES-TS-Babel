function a() {
    console.log(this.message);
}

a();

a.call({message: "Hello - call"});
a();

a.apply({message: "Hello - apply"});
a();

var b = a.bind({message: "Hello - bind"});
a();
b();
a();