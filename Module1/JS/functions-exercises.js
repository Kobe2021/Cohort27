//Exercise 1
function computeArea(width, height){
    area = width * height;
    return 'The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + area + ' square units.';
}

console.log(computeArea(3, 4));

//Exercise 2
function planetHasWater(planet){
    if(planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars'){
        return true;
    } else{
        return false;
    }
}
console.log(planetHasWater('Earth'));

//Exercise 3
function addTwo(num){
    return num + 2
}
console.log(addTwo(2));

//Exercise 4
function sayHello(name = 'Guest'){
    return `Hi ${name}`
}
console.log(sayHello('Kobe'));
console.log(sayHello()); //Default value
console.log(sayHello('Tom'));

const wereAwesome = (myName, classmateName) => `${classmateName} and ${myName} are awesome!`

const message = wereAwesome('Kobe', 'Anna')
console.log(message);

//Exercise 6
const addS = str => str + 's'
console.log(addS('Apple'));

//Exercise 7
const isOdd = function(num){
    if(num % 2 === 1){
        return true
    } else {
        return false
    }
}
console.log(isOdd(5));
console.log(isOdd(2));

//Challenges
//reverse string
function reverseString(str){
    let reverseStr = '' //place holder for reverse string
    for(let i = str.length -1; i >= 0; i--){
        reverseStr += str[i] //concat current character to variable
    }
    return reverseStr
}
console.log(reverseString('banana'));

//Capitalize string
const capitalizeString = str => {
    return str[0].toUpperCase() + str.substring(1)
}
console.log(capitalizeString('apple'));
console.log(capitalizeString('banana'));