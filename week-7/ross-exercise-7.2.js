/*
============================================
; Title: Exercise 7.2
; Author: Dan Ross
; Date: 11 July 2020;
; Description: Constructor Functions
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

/**
 * Params: id, firstName, lastName, title
 * Response: void
 * Description: sets the id, first name, last name, and title an object
 */
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
//create 5 new objects
var employees = [
  new employee("1", "Thomas", "Edison", "Software Engineer"),
  new employee("2", "Benjamin", "Franklin", "Programmer"),
  new employee("3", "Nikola", "Tesla", "Project Manager"),
  new employee("4", "Charles", "Babbage", "Product Manager"),
  new employee("5", "Alexander", "Bell", "Business Analyst"),
]

// output header
console.log(header.display("Dan", "Ross", "Exercise 7.2"));
console.log('');

//loop through array and output results
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].id + " " + employees[i].firstName + " " + employees[i].lastName + " " + employees[i].title);

}
