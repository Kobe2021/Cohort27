const user = {
    name: 'Kobe',
    age: 25,
    isLoggedIn: true
} //Object
const car = {
    color: "blue",
    hp: 400,
    year: 1989,
    isElectric: false
}

car.engine = "V6" //Add new property to an object

car.doors = 2
// console.log(car);
car.color = "red" //Update a property in the object
car.isElectric = true;
if(car.isElectric){
    console.log("Car is electric!")
} else {
    console.log("You need gas!")
}
car.year = 2019
console.log(car);
if(car.year <= 1960){
    console.log("It's a classic!")
} else if (car.year <= 2000){
    console.log("The car is getting old")
} else {
    console.log("Nice car!")
}

const dev = {
    programmingLanguages: ['javascript', 'python', 'html', 'css',],
    address: {
        street: '123 Main Street',
        zipcode: '12345',
        city: 'Yonkers',
        state: 'NY'
    }
}
const devCity = dev.address.city
console.log(devCity)
// dev.programmingLanguages.forEach((language) => console.log(language))

const coder = {
    name: 'Jason',
    company: 'IBM',
    joinedCompany: 2020,
    languages: ['C', 'C++', 'C#', 'Ruby'],
    greeting: function(name){
        console.log(`Hello ${name}`);
    }
}
coder.greeting('Kobe');
console.log(coder)