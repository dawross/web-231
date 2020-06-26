/*
============================================
; Title: Discussion 5.1
; Author: Dan Ross
; Date: 24 June 2020;
; Description: Advanced Arrays with 2 errors
;===========================================
*/

//map of to do list
let toDo = new Map();
toDo.set('party', 'Friday');
toDo.set('rehearsal', 'Saturday');
toDo.set('homework', 'Sunday');
toDo.set('clean', 'Sunday');
todo.set('hike', 'Monday');

//loop through map and output
for (let [event day] of toDo) {
  console.log('To do: ' + event + ' on ' + day);
}


