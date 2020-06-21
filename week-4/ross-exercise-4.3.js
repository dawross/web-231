/*
============================================
; Title: Exercise 4.3
; Author: Dan Ross
; Date: 21 June 2020;
; Description: Filtering
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

//Vehicle array
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

/**
 * Params: arr, val
 * Response: console.log(arr[i]);
 * Description: Loops through array and outputs the selected value when
 * call the function and specify the array and value of the item in the array
 */
function getValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === val)
    console.log(arr[i]);
  }
}

// output header
console.log(header.display("Dan", "Ross", "Exercise 4.3"));
console.log('\n');

//output
console.log("-- DISPLAYING ARRAY ITEMS --");

//Loops through the vehicle array and display  entire list
for (var i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}
//new line
console.log("");

console.log("-- SELECTED VALUE --");
//Prints out only the selected item in the array using the getValue() function
getValue(vehicles, "Motorcycle");

//new line
console.log("");

console.log("-- SELECTED VALUE --");
//Prints out only the selected item in the array using the getValue() function
getValue(vehicles, "Bus");
