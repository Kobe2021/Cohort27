// for(let i = 0; i <= 10; i++){
//     console.log(i);
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }




// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         continue
//     } else if(i === 8){
//         break
//     }
//     console.log(`${i} * 2 = ${i * 2}`);
// }


// const word = 'Hello'
// //Falsy value
// let reversed = '';
// for(let i = word.length - 1; i >= 0; i--){
//     reversed += word[i];
//     console.log(reversed);
// }

let message = 'Hello World!'
//These for loops do the exact same thing
for(let i = 0; i < message.length; i++){
    console.log(message[i])
}
for(c of message){
    console.log(c);
}

//Do While loop
let i = 0
do{
    console.log('Do While')
    i--
}while(i > 0)