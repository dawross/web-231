/*
============================================
; Title: Assignment 1.5
; Author: Dan Ross
; Date: 31 May 2020
; Description: Types, values, and variables.
;===========================================
*/

var firstName = "Dan";
var lastName = "Ross";
var address = "1234 Street";
var payRate = 30.00;
var payRateFormat = payRate.toFixed(1); //convert pay rate to one decimal place
var hireDate = new Date(2012, 3, 20); //April 20, 2012
var hireDateFormat = hireDate.toLocaleDateString(); //converts to MM/DD/YYYY format

console.log("Name: " + firstName + ' ' + lastName); 
console.log("Address: " + address); 
console.log("Pay rate: " + "$" + payRateFormat);
console.log("Hire date: " + hireDateFormat);

var firstName = "Don";
var lastName = "Rush";
var address = "2323 Street";
var payRate = 27.00;
var payRateFormat = payRate.toFixed(1); //convert pay rate to one decimal place
var hireDate = new Date(2016, 6, 12); //July 12, 2016
var hireDateFormat = hireDate.toLocaleDateString(); //converts to MM/DD/YYYY format

console.log('\n');
console.log("Name: " + firstName + ' ' + lastName);
console.log("Address: " + address);
console.log("Pay rate: " + "$" + payRateFormat); 
console.log("Hire date: " + hireDateFormat); 

var firstName = "Ron";
var lastName = "Russ";
var address = "3434 Street";
var payRate = 34.00;
var payRateFormat = payRate.toFixed(1); //convert pay rate to one decimal place
var hireDate = new Date(2018, 12, 5); //January 5, 2019
var hireDateFormat = hireDate.toLocaleDateString(); //converts to MM/DD/YYYY format

console.log('\n');
console.log("Name: " + firstName + ' ' + lastName);
console.log("Address: " + address);
console.log("Pay rate: " + "$" + payRateFormat); 
console.log("Hire date: " + hireDateFormat); 