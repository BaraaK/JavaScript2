/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */



// first solution
function removeDuplicates(arr){
  for(let i = 0; i<arr.length ; i++) {
    for (let j = arr.length-1; j>i ; j--) {
      if (arr[i] === arr[j]) 
        arr.splice(j,1); 
    }
  }
}
// second solution
function myRemoveDuplicates(arr) {
  let mySet = new Set(arr); // declare a set object and add the array into the set object to remove duplicated elements
  let myArr = Array.from(mySet); // convert the set object into new array object
  arr.splice(0,arr.length); // use the splice method to modify the array by removing all the elements form it 
  arr.push.apply(arr,myArr); // add the new array elements to the original array

}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);
console.log(`fisrt solution : ${letters}`);
myRemoveDuplicates(letters);
console.log(`second solution: ${letters}`);


