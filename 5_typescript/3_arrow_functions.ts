class Square1 {
    constructor(public side: number) {
    }
    increaseSize() {
        this.side++;
    }
}
var square1 = new Square1(1);
setTimeout(square1.increaseSize,1000);
setTimeout(function() { console.log(square1.side); },2000); // 2

class Square2 {
    constructor(public side: number) {
    }
    increaseSize = () =>  {
        this.side++;
    }
}
var square2 = new Square2(1);
setTimeout(square2.increaseSize,1000);
setTimeout(function() { console.log(square2.side); },2000); // 2