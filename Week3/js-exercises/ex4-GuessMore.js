/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.
OUTPUT:
10
{ x: 10 }
line 21 : print the value of x which is declared in the global execution context with the value 9 and the line 20 will not affect on
the value of x, however it return an instance for another value.
line 34 will print the an object with value of 10 because we invoke the function f2 before in the line 33 which create a function excution context
f2 modify the vlaue of the object and return the object. 
*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);