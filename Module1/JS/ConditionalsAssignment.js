// Change the number of numToCheck to test your code
let numToCheck = 10;

// Write your code below

if(numToCheck >= 0){
    console.log('Positive');
} else {
    console.log('Negative');
}

let age = 17
if(age > 18){
    console.log('Access Granted');
} else{
    console.log('Access Denied');
}

let num = 0;
if(num > 0){
    console.log('Positive');
    if(num > 100){
        console.log('Greater than 100');
    } else {
        console.log('Less than 100');
    }
} else {
    console.log('Negative');
}


//Letter Grade Exercise
let gradeNum = 79.58
let letterGrade = null

console.log('What is your letter grade?');
if(gradeNum > 0){
    if(gradeNum >= 90){
        letterGrade = 'A'
        console.log(letterGrade);
    } else if (gradeNum >= 80 && gradeNum < 90){
        letterGrade = 'B'
        console.log(letterGrade);
    } else if (gradeNum >= 70 && gradeNum < 80){
        letterGrade = 'C'
        console.log(letterGrade);
    } else if (gradeNum >= 55 && gradeNum < 70){
        letterGrade = 'D'
        console.log(letterGrade);
    } else{
        letterGrade = 'F'
        console.log(letterGrade);
    } 
} else {
    console.log("Invalid Number");
}
console.log('Grade: ' + gradeNum);
