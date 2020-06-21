
/* ============================================
; Title: Assignment 4.1
; Author: Professor Krasso
; Date: 15 June 2020
; Modified By: Dan Ross
; Description: 2 errors in the array
;=========================================== */

// List of Arrays that needs to be displayed
// Two errors below
var food = [ 'hot dog' , ' burger ', ' pizza ', ' tacos ', ' french fries '] ; //DR - added "=" after variable name

//Function and Iteration creation to display the array
function getFood ( arrFood ){
for ( var x = 0; x < arrFood . length ; x ++) //DR - replaced "+" with "=" after "var x" to set variable to zero
console . log ( arrFood [ x ]);
}

// Calls the function and variable
getFood ( food );
