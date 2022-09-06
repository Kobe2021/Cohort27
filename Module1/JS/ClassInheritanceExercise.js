class Person{
    constructor(name, eyes, legs){
        this.name = name
        this.eyes = eyes
        this.legs = 2
    }
    walk(){

    }
    speak(other){
        console.log(`Hello ${other}`);
    }
    think(){

    }
}
class PostalWorkers extends Person{
    walk(){

    }
    speak(){
        console.log(`Hello ${other}`);
    }
    think(){

    }
}
class Chef extends Person{
    walk(){

    }
    speak(){
        console.log(`Hello ${other}`);
    }
    think(){

    }
}
const Boyardee = new Chef('Boyardee', 'brown', 2)
const Ramsey = new Chef('Ramsey', 'black', 2)
const Tim = new PostalWorkers('Tim', 'blue', 2)
const Joe = new PostalWorkers('Joe', 'brown', 2)
console.log(Boyardee)
console.log(Ramsey)
console.log(Tim)
console.log(Joe)

class BankAccount{
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = acctNum
    }
    deposit(amount){
        return balance += amount;
    }
    withdraw(amount){
        this.withdraw = true
        return balance -= amount;
    }
    overDraft = false
}
class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, acctNum)
    overdraftEnabled(overDraft){
        if(balance < 0){
            overDraft = true
            this.withdraw = false
        }
    }
}
class SavingsAccount extends BankAccount{
    constructor(ownerName, balance, acctNum)
    withdraw(){
        this.withdraw = false
    }
}