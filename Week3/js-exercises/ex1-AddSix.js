/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

function createBase( baseNumber ) {
  const addNum = function(number) {
    return number + baseNumber;
  }
  return addNum;

}

const addSix = createBase(6);
const addNine = addSix(9);
const addEighteen = addSix(18);
const addThirty = addSix(30);

console.log(addNine);
console.log(addEighteen);
console.log(addThirty);