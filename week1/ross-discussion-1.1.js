/* 
      
     ============================================ 
       
     ; Title: Assignment 1.1 
     
     ; Author: Jonathan Roland 
    
     ; Date: 28 May 2020 
    
     ; Modified By: Dan Ross
     
     ; Description: A javascript program with at least 2 errors 
     
     ;=========================================== 
     
     */

// I changed the formatting of the entire document to make it easier to read.

var one = 1; //I changed Var to var since it should not have been capitalized.

var two = 2;

var three = 3; //I changed the == to = since that's not valid for defining a variable.

var four = 4; //I added a semi colon to the end of this variable for consistencies sake

var five = 5; // I changed this from != to = since the former is not valid for defining a variable.

if (five - two === three) {
  // I changed the = operator to === to make sure it matched the number only and not a string
  console.log("variable values are correct.");
}

if (one + four === five) {
  console.log("variable values are correct."); // I added quotes around this console.log statement
}
