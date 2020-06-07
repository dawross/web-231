/*
============================================
; Title: Assignment 2.4
; Author: Dan Ross
; Date: 6 June 2020
; Description: Functions
;===========================================
*/

/**
 * Params: firstName, lastName
 * Response: firstName + lastName
 * Description: returns firstName and lastName as one string
 */
function fullName(firstName, lastName) {
  return firstName + lastName;
}
//output
console.log(fullName("Dan", " Ross"));

/**
 * Params: year, month, day
 * Response: month+"/"+day+"/"+year
 * Description: returns date formatted as MM/DD/YYY
 */
function dateWriter(year, month, day) {
  return month+"/"+day+"/"+year;
}

//output
console.log(dateWriter(2020, 6, 7));

/**
 * Params: number, numOfFixedPositions
 * Response: number.toFixed(numOfFixedPositions)
 * Description: returns number in fixed position
 */
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}
//output
console.log(formatNumber(5.546346456, 2));

/**
 * Params: val
 * Response: return parseInt(val);
 * Description: returns string as integer
 */
function convertToInt(val) {
  return parseInt(val);
}
//output
console.log(convertToInt("3456 is a number"));

/**
 * Params: val
 * Response: return parseFloat(val);
 * Description: returns string as floating point number
 */
function convertToFloat(val) {
  return parseFloat(val);
}

//output
console.log(convertToFloat("10.99 is the price"));
