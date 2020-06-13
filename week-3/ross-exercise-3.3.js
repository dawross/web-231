/*
============================================
; Title: Exercise 3.3
; Author: Dan Ross
; Date: 13 June 2020
; Description: Control Statements
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');


var eventKeyCode = 13

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.3"));
console.log('\n');

//switch statement
switch(eventKeyCode) {
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
    break;
  default:
    console.log("Unrecognized key.");
}







