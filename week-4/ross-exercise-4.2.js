/*
============================================
; Title: Exercise 4.2
; Author: Dan Ross
; Date: 21 June 2020;
; Description: Arrays
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

//fruits array
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

/**
 * Params: arr
 * Response: Loops through array and outputs the entire list
 * Description: Function that loops through the array and
 * prints it to the console when the function is called
 */
function getFruit(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// output header
console.log(header.display("Dan", "Ross", "Exercise 4.2"));
console.log('\n');

//output from the getFruit() function
getFruit(fruits);
