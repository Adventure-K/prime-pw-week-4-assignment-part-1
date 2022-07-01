console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
//  name = 'Andrew';
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('Should say "Hello, Andrew"', helloName( 'Andrew' ));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}
console.log('function addNumbers', addNumbers( 4, 17 ));
console.log('function addNumbers', addNumbers( 3498, 212 ));
console.log('function addNumbers', addNumbers( 3, 333 ));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let product = num1 * num2 * num3;
  return product;
}
console.log('function multiplyThree', multiplyThree(4,16,222));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let arr1 = [];
let arr2 = [6, 15, 23, 4, 5, 0, 13]
let arr3 = [66, 65, 32, 33]

function getLast( array ) {
  if ( array.length === 0 ) {
    return 'undefined';
  }
  else {
  return array[array.length - 1]
  }
}
console.log('*function getLast*');
console.log('The last item in arr1 is', getLast(arr1));
console.log('The last item in arr2 is', getLast(arr2));
console.log('The last item in arr3 is', getLast(arr3));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('*function find*');
console.log('arr1 contains requested value:', find(15, arr1));
console.log('arr2 contains requested value:', find(15, arr2));
console.log('arr3 contains requested value:', find(15, arr3));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (letter === string.slice(0,1)) {
  return true;
}
return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('m', 'hippopotamus') );
console.log( 'isFirstLetter - should say true', isFirstLetter('m', 'monkey') );


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (x of array) {
    sum += x;
  }
  return sum;
}
console.log('sumAll arr1', sumAll(arr1));
console.log('sumAll arr2', sumAll(arr2));
console.log('sumAll arr3', sumAll(arr3));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let inputArray = [2, 0, -4, -5, 77, 13];
let inputArray2 = [-1, -3, 0, 0, -44];

function findPos(array) {
  let outputArray = [];
  for (x of array) {
    if (x > 0) {
      outputArray.push(x);
    }
  }
  return outputArray;
}
console.log('findPos returns these values from inputArray:', findPos(inputArray));
console.log('findPos returns these values from inputArray2:', findPos(inputArray2));

/*
findPos(inputArray);
console.log('function findPos returns these numbers from inputArray:', outputArray);
findPos(inputArray2);
console.log('function findPos returns these numbers from inputArray2:', outputArray);
*/

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// From https://edabit.com/challenge/4gzDuDkompAqujpRi :
// "Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the 
// function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10."

function addUp(num) {
  let sum = 0;
  if (num > 1000 || num < 1) {
    return 'Please enter an integer from 1 to 1000 inclusive.'
  }
  while (num > 0) {
    sum += num;
    num--;
  }
  return sum;
}

console.log('function addUp 13:', addUp(13));
console.log('function addUp 1013:', addUp(1013));
console.log('function addUp 0:', addUp(0));
console.log('function addUp 954:', addUp(954));

// Alternate loopless function with better math

function addUp2(num) {
  let sum = 0;
  if (num > 1000 || num < 1) {
    return 'Please enter an integer from 1 to 1000 inclusive.'
  }
  sum = num * (num + 1) / 2;
  return sum;
}
console.log('function addUp2 13:', addUp2(13));
console.log('function addUp2 954:', addUp2(954));
console.log('function addUp2 134:', addUp2(134));