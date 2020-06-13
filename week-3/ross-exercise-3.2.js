/*
============================================
; Title: Exercise 3.2
; Author: Dan Ross
; Date: 13 June 2020
; Description: Pattern Matching Functions
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

//test variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

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
  console.log(a + " and " + b + " do not match!");
}

/**
 * Params: a, b
 * Response: console log message stating that the 2 values do match.
 * Description: String message stating that the parameter values do match.
 */
function logMatch(a, b) {
  console.log(a + " and " + b + " do match!");
}

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.2"));
console.log('\n');

// output from the match() function
console.log(match("dog", "cat"));
console.log(match("3", "3"));


//Conditional "if...else" statements. Include checks for all six (6) test variables.
if(match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

if(match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

if(match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
  logMismatch(testVar5, testVar6);
}
