/*
============================================
; Title: Exercise 4.4
; Author: Dan Ross
; Date: 21 June 2020;
; Description: Predicates
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

//states array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

/**
 * Params: param1, val
 * Response: if param1 === val - return true
 * Description: Loops through array and outputs the selected value when
 * the function is called
 */
function getState(param1, val) {
  for (var i = 0; i < param1.length; i++) {
    if(param1 === val) {
      return true
    }
  }
}

//New variable that filters the getState function and finds "Iowa"
var filteredState = states.filter
  (function(param1) {
    return getState(param1, "Iowa")
  })[0];

// output header
console.log(header.display("Dan", "Ross", "Exercise 4.3"));
console.log('\n');

console.log("-- ORIGINAL ARRAY --");

//Loops through the state array and displays entire list
for (var i = 0; i < states.length; i++) {
  console.log(states[i]);
}
//new line
console.log("");
console.log("-- SORTED ARRAY --");

//loop and sort the array
for (var i = 0; i < states.length; i++) {
  //sort states alphabetically
  states.sort();
  //output
  console.log(states[i]);
}
//new line
console.log("");
console.log("-- SELECTED VALUE --")

//outputs Iowa
console.log(filteredState);
