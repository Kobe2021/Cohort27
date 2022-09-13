//1. Create a new variable called 'total' and assign it the div with the id of 'total'
let total = document.getElementById('total')
console.log(total);    
//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
// Example: 
function add(){
    // add 1 to the textContent of the total variable
    total.textContent++;
    // update the value of the total variable textContent
    window.alert('Added +1');
    return Number(total)
    // use an alert to alert the user
}
function subtract(){
    total.textContent--;
    window.alert('Subtracted -1');
    return Number(total)
}
function multiplyBy2(){
    total.textContent = total.textContent * 2;
    window.alert('Multiplied by 2');
    return Number(total)
}
function divideBy2(){
    total.textContent = total.textContent / 2;
    window.alert('Divided by 2');
    return Number(total)
}
function multiplyBy5(){
    total.textContent = total.textContent * 5;
    window.alert('Multiplied by 5');
    return Number(total)
}
function divideBy5(){
    total.textContent = total.textContent / 5;
    window.alert('Divided by 5');
    return Number(total)
}
//3. Attach Functions to Buttons
const addBtn = document.getElementById('add')
addBtn.addEventListener('click', add)

const subBtn = document.getElementById('subtract')
subBtn.addEventListener('click', subtract)

const multiBtn = document.getElementById('mult-2')
multiBtn.addEventListener('click', multiplyBy2)

const divBtn = document.getElementById('div-2')
divBtn.addEventListener('click', divideBy2)

const multiBtn5 = document.getElementById('mult-5')
multiBtn5.addEventListener('click', multiplyBy5)

const divBtn5 = document.getElementById('div-5')
divBtn5.addEventListener('click', divideBy5)
