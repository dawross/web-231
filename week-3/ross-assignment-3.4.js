/*
============================================
; Title: Assignment 3.4
; Author: Dan Ross
; Date: 13 June 2020
; Description: Loops
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

var ourNmbr = 6;

/**
 * Params: a, b
 * Response: true or false
 * Description: returns "true" if parameter values match and "false" if they do not match.
 */
function match(a, b) {
  if(a === b) {
    return true
  } else {
    return false
  }
}

/**
 * Params: a, b
 * Response: console log message stating that the 2 values do not match.
 * Description: String message stating that the parameter values do not match.
 */
function logMismatch(a, b) {
  console.log(a + " does not " + "match " + b + "!");
}

/**
 * Params: a, b
 * Response: console log message stating that the 2 values do match.
 * Description: String message stating that the parameter values do match.
 */
function logMatch(a, b) {
  console.log(a + " does " + "match " + b + "!");
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.4"));
console.log('\n');

//output
console.log("-- DO THE NUMBERS MATCH GAME --");

//for loop
for (var x = 0; x < 10; x++) {
  var rndm = randomNumber();
  if(match(ourNmbr, rndm)) {
    logMatch(ourNmbr, rndm);
  } else {
    logMismatch(ourNmbr, rndm);
  }
}
