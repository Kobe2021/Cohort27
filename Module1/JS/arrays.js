// let num1 = 20
// const num2 = num1

// num1 = 100

// const colors = ['red', 'blue', 'green'] //Array
// const users = ['kobe', 'anna', 'joe']

// const movies = ['Good Burger', 'Robots', 'Finding Nemo']
// console.log(movies);

// const top10 = []
// top10.push('Cars')
// top10.unshift('Star Wars') //Add an element to the beginning of the array

// console.log(top10);

// //splice
// const months = ['Jan', 'Mar', 'Apr', 'June'];

// months.splice(1, 0, 'Feb')
// months.splice(-1, 1, 'May')
// console.log(months)

// const latestShows = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

// //forEach will mutate the array or return a value
// latestShows.forEach((show) => {
//     console.log(show);
// })

// //The map method returns a new array
// const newShowArr = latestShows.map((show) => {
//     return show
// })
// console.log(newShowArr)

const recreateForEach = (array, callback) => {
    for(i = 0; i < array.length; i++){
        callback(array[i]); //call the callback function on 
                            //each element in array
    }
}
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
recreateForEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
console.log(typeof recreateForEach); // should log: 'function'
recreateForEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'


//Nested arrays
const studentsData = [ ['Jack', 24], ['Sara', 23], ['Peter', 24] ];

for (let outter = 0; outter < studentsData.length; outter++){
    // console.log(studentsData[outter]);

    for(let inner = 0; inner < studentsData[outter].length; inner++){
        // console.log(studentsData[outter][inner]);
    }
}

studentsData.forEach((arr, idx) =>{
    console.log(arr);
    
    arr.forEach((item) => {
        console.log(item);
    })
})