/*
============================================
; Title: Exercise 2.3
; Author: Dan Ross
; Date: 6 June 2020
; Description: Function Properties
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

// function property definitions
myName.dan = "Dan Ross";

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.dan
}

// output
console.log(header.display("Dan", "Ross", "Exercise 2.3"));
//Line break
console.log('\n');

console.log("Hello " + myName() + "!");
