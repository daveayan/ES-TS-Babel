function* idMaker(){
    var index = 0;
    while(index < 3)
        yield index++;
}

var gen = idMaker();

var gen1 = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
console.log(gen.next().value); // undefined

console.log(gen1.next().value); // 0
console.log(gen1.next().value); // 1
console.log(gen1.next().value); // 2
console.log(gen1.next().value); // undefined
console.log(gen1.next().value); // undefined