//Loops that output odd numbers, then even numbers
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}
for(let i = 0; i <= 10; i++){
    if(i === 0){
        continue;
    }
    if(i % 2 === 0){
        console.log(i)
    }
}
console.log('----------------');

//Loop that counts down from 10 to 1
for(let i = 10; i > 0; i--){
    console.log(i);
}
console.log('----------------');

//Loop that output multiples of 3
//starting from 6 and ending at 60
for(i = 6; i <= 60; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}
console.log('----------------');

//Loop that uses % operator
//and prints even numbers from 0 to 10
for(i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
console.log('----------------');

//Loop for a given output
const hashTag = '#######'
//Falsy value
let reversed = '';
for(let i = hashTag.length - 1; i >= 0; i--){
    reversed += hashTag[i];
    console.log(reversed);
}
console.log('----------------');

//Loop that prints integers in multiples of 3
//as long as they are less than 35
for(i = 0; i < 35; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//Loop that prints integers in multiples of 5
//as long as they are less than 100
for(i = 0; i < 100; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

//Loop that prints integers between 0 and 20
//All numbers divisible by 2 are multiplied by 3
for(i = 1; i < 20; i++){
    if(i % 2 === 0){

        console.log('Even number multiplied by 3: ' + (i * 3));
    }
}

