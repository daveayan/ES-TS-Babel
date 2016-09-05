var Square1 = (function () {
    function Square1(side) {
        this.side = side;
    }
    Square1.prototype.increaseSize = function () {
        this.side++;
    };
    return Square1;
})();
var square1 = new Square1(1);
setTimeout(square1.increaseSize, 1000);
setTimeout(function () { console.log(square1.side); }, 2000); // 2
var Square2 = (function () {
    function Square2(side) {
        var _this = this;
        this.side = side;
        this.increaseSize = function () {
            _this.side++;
        };
    }
    return Square2;
})();
var square2 = new Square2(1);
setTimeout(square2.increaseSize, 1000);
setTimeout(function () { console.log(square2.side); }, 2000); // 2
//# sourceMappingURL=3_arrow_functions.js.map