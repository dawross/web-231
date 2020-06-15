/*

============================================
; Title:  Discussion 3.1
; Author: Brooklyn Hairston
; Date:   10 June 2020
; Modified by: Dan Ross
; Description: JavaScript program using while loop with three errors
;===========================================
*/

//expected output when loop terminates first = 10, second = 40

var first = 5;
var second = 0;

//while loop with two errors
while (first < 10) { //added () around while expression and got rid of ""
  first++; //added ++ so it would increment
  second += first;
}
//output with one error
console.log(first);
console.log(second);
