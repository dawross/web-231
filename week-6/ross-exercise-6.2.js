/*
============================================
; Title: Exercise 6.2
; Author: Dan Ross
; Date: 5 July 2020;
; Description: Exception Handling
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

// output header
console.log(header.display("Dan", "Ross", "Exercise 6.2"));
console.log('');

try {
  //variables
  var x = "1";
  var y = "7"
  //if statement
  if (x + y !== '9'){
    throw new Error("This sum does not equal 9")
  }
} catch(e) {
  //output
  console.log("Catch clause: " + e.message)
} finally {
  console.log("Finally clause reached...")
}
