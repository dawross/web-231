/*
============================================
; Title: Exercise 5.4
; Author: Dan Ross
; Date: 27 June 2020;
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/
//Imports the ross-header.js file from the root directory
var header = require('../ross-header.js'); //composers object

//composers array object
var composers = [{
  firstName: "Ludwig van",
  lastName: "Beethoven",
  genre: "Classical",
  rating: "8"
}, {
  firstName: "Wolfgang",
  lastName: "Mozart",
  genre: "Classical",
  rating: "10"
}, {
  firstName: "Johann",
  lastName: "Bach",
  genre: "Classical",
  rating: "9"
}, {
  firstName: "Franz",
  lastName: "Haydn",
  genre: "Classical",
  rating: "6"
}, {
  firstName: "Franz",
  lastName: "Schubert",
  genre: "Classical",
  rating: "5"
}];

//filtered array of composers by rating
var cmpRatings = composers.map(function (composer) {
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});
//filtered array of composers by genre
var cmpGenres = composers.map(function (genre) {
  return "Genre: " + genre.genre + "\n" + "Composer: " + genre.lastName;
});

// output header
console.log(header.display("Dan", "Ross", "Assignment 5.4"));
console.log("");

//output for composers by rating
console.log("-- COMPOSER BY RATING--");
cmpRatings.forEach(function (e) {
  console.log(e);
  console.log("");
});

//output for composers by genre
console.log("-- COMPOSER BY GENRE--");
cmpGenres.forEach(function (e) {
  console.log(e);
  console.log("");
});
