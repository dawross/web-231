/*
============================================
; Title: Exercise 5.3
; Author: Dan Ross
; Date: 26 June 2020;
; Description: Object Collections
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require('../ross-header.js');

//composers object
var composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: "8"
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: "10"
  },
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: "9"
  },
  {
    firstName: "Franz",
    lastName: "Haydn",
    genre: "Classical",
    rating: "6"
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: "5"
  }
]
// output header
console.log(header.display("Dan", "Ross", "Exercise 5.3"));
//new line
console.log('');

console.log("-- COMPOSERS --")
//iterate over composer object and output results
composers.forEach(function(e){
  console.log("Last Name: " + e.lastName + ", " + "Genre: " + e.genre + ", " + "Rating: " + e.rating);
});






