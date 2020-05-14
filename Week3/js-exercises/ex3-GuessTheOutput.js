/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

output : alert window with value 12.

line 21 Declare a new variable 'a' in the global execution context and assign it the number 10.
Lines 22-27. Declare a new variable x and assign it a function definition.
line 28 Retrieve the variable c from the global execution context memory and execute it as a function.
New function call = new execution context. Create a new local execution context.
In the local execution context, declare a variable 'a' and assign it the number 12.
continue to the inner function which create also a new local excution context and print an alert with the value of a.
The engine looks for a variable named 'a' and it look up and finds it with value 12.
the a=12 will destroy after the end of excution context of x function.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();