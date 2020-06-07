/*
============================================
; Title: Exercise 2.3
; Author: Dan Ross
; Date: 6 June 2020
; Description: Function Properties
;===========================================
*/

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
console.log(myName());
