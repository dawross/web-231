/*
============================================
; Title: Exercise 6.3
; Author: Dan Ross
; Date: 5 July 2020;
; Description: Object Literals
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

// output header
console.log(header.display("Dan", "Ross", "Exercise 6.3"));
console.log('');
//object
var ticket = {
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones"
}
//output
console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requestor: " + ticket.requester + "}");
