//Function Definition
function sayHello(){
    console.log('Hello...')
}

//function execution
sayHello()

//ES6
let division = (x, y) => {
    console.log(x/y);

}

console.log(division(42,7))

let addThreeNum = (var1, var2, var3) => {
    console.log(var1+var2+var3)

}
addThreeNum(3, 4, 5)

function sayHello(){
    console.log('Hello...')
}
const greeting = function(){
    console.log("Hello World!");
}

greeting()
//Function execution

function multiplyByTen(input){
    return input * 10
}
const result = multiplyByTen(2)
console.log(result);