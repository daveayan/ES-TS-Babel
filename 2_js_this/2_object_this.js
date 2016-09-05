function a() {
    console.log(this);
    console.log(this.message);
}

a();

var obj = {message: "Hello", b: a};
obj.b();