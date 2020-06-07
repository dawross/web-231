/*
============================================
; Title: Assignment 2.4
; Author: Dan Ross
; Date: 6 June 2020
; Description: Functions
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

/**
 * Params: firstName, lastName
 * Response: firstName + lastName
 * Description: returns firstName and lastName as one string
 */
function fullName(firstName, lastName) {
  return firstName + lastName;
}

/**
 * Params: year, month, day
 * Response: month+"/"+day+"/"+year
 * Description: returns date formatted as MM/DD/YYY
 */
function dateWriter(year, month, day) {
  return month+"/"+day+"/"+year;
}

/**
 * Params: number, numOfFixedPositions
 * Response: number.toFixed(numOfFixedPositions)
 * Description: returns number in fixed position
 */
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

/**
 * Params: val
 * Response: return parseInt(val);
 * Description: returns string as integer
 */
function convertToInt(val) {
  return parseInt(val);
}

/**
 * Params: val
 * Response: return parseFloat(val);
 * Description: returns string as floating point number
 */
function convertToFloat(val) {
  return parseFloat(val);
}

//output
console.log(header.display("Dan", "Ross", "Assignment 2.4"));
//Line break
console.log('\n');

console.log("Hello my name is " + fullName("Dan", " Ross") + "!");

console.log("Today's date is " + dateWriter(2020, 6, 7) + " and the current temperature is " + (formatNumber(33.645, 1) + " degrees" + "."));

console.log("I am " + convertToInt("46 is my age") + " years old and my savings account goal is " + convertToFloat("50000 is my savings account goal") + ".");
