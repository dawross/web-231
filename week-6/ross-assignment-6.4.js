/*
============================================
; Title: Assignment 6.4
; Author: Dan Ross
; Date: 5 July 2020;
; Description: Nested Object Literals
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

// output header
console.log(header.display("Dan", "Ross", "Assignment 6.4"));
console.log('');

//object
var ticket = {
  id: 105,
  name: "Help Desk Support",
  requester: "Dan Ross",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "medium",
  person:{
    id: 211,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
}
//output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").")
