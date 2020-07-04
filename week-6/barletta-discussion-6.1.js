
/*
  	============================================
  	; Title: barleta-fixErrors.js
  	; Author: Marie Nicole Barleta
  	; Date: 02 July 2020
  	; Modified by:
  	; Description: Find errors, objects in JavaScript
  	;===========================================
  	*/

  	/*
  	Expected output:

  	Employee ID: 152942
  	Employee name: Nicole
  	Employee rate: 15
  	Employee name: Full-time

  	*/



  	//find errors
  	var employees = {

  	 idNum: 0452556,

  	 id: 152942, //DR - added id of 152942
  	 name: "Nicole",
  	 rate: 15, //DR - added comma
  	 types: "Full-time"

    }// DR - added closing curly bracket


  	console.log("Employee ID: " + employees.id) //DR - changed , to +. Deleted quotes around employees.id. Changed idNum to id based on expected output.
  	console.log("Employee name: " + employees.name) //DR - got rid of brackets around name
  	console.log("Employee rate: " + employees.rate)// DR - changed "employees.['id']['rate']" to "employees.rate"
  	console.log("Employee name: " + employees.types)// DR - Deleted quotes around employees.type. Not sure why this one still says "Employee Name", but I left is as-is based on expected output. Also changed "type" to "types."
