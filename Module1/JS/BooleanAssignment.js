// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
isLooselyEqual = num == string
isStrictlyEqual = num === string
 

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
isTrueNotFalse = isTrue !== isFalse

// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);