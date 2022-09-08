// function myFunc(){
//     console.log(this); //global object
// }
class vehicle{
    constructor(vin, make, color){
        this.vin = vin
        this.make = make
        this.color = color || 'blue'
        this.isRunning = false
    }

    start(){
        this.isRunning = true
        console.log('Vehicle is running...');
    }
    stop(){
        this.isRunning = false
        console.log('Vehicle stopped...');
    }
    toString(){
        return `Vehicle ${this.vin} is a ${this.make} and is ${this.color}.`
    }

}
const v1 = new vehicle('xyz123', 'Honda', 'blue') //Declaring an instance of Vehicle
const v2 = new vehicle('xyz456', 'Ford')
//vehicle.start() //method will not work here
//console.log(typeof v1);
v2.color = 'red';

v1.start()
v2.start()
v1.stop()
v2.stop()

console.log(v1);
console.log(v2);
console.log(v1.toString());
console.log(v2.toString());