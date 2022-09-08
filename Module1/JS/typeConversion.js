let value;

let num1 = 12
let num2 = 30

value = String(num1) //converts num1 to a string

console.log(value)

//Convert different values to a string
value = String(num1)
value = String(2+2)
value = String(true)
value = String([1,2,3,3,3,3,3])

//String to number
value = Number('1242')
value = parseInt('8364863')
value = parseFloat('8364.863')

value = parseInt('5e1')


// parseInt()  =  NaN
// parseInt(null) = NaN
// parseInt(true) = NaN
// parseInt('') = NaN
// parseInt('32px') = 32
// parseInt('5e1') = 5

// Number()  =0
// Number(null) =  0
// Number(true) = 1
// Number('') = 0
// Number('32px') = NaN
// Number('5e1') = 50

value = Number('5e3')
console.log(value)
