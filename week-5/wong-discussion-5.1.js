 /*
============================================
; Title: Arrays js
; Author: Devan Wong
; Date: 25 June 2020
; Modified By: Dan Ross
; Description: Find at least two errors.
;===========================================
*/

let inventory = new Map();
inventory.set('toilet paper', 10);
inventory.set('paper towel', 3);
inventory.set('tissue', 0);
inventory.set('sanitizer', 2);

for (let [value, key] of inventory) { //DR - replaced the () around "value, key" with [] since it's looping through an array
  if (value < 5) {
    console.log(key + ' is running low. You have ' + value + ' left.');
  }
}

console.log(inventory.size); //4
console.log(inventory.has('tissue')) //true
