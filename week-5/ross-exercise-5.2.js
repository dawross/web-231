/*
============================================
; Title: Exercise 5.2
; Author: Dan Ross
; Date: 26 June 2020;
; Description: ES5 Built-In Functions
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

var food = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"]

// output header
console.log(header.display("Dan", "Ross", "Exercise 5.2"));
console.log('');

//iterate over array and output results
food.forEach(function(foods){
  console.log(foods);
});
