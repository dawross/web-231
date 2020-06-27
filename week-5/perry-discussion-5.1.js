
/*

Title: Perry-discussion 5.1.js
Author: Erica Perry
Date:6/25/2020
Modified by:Dan Ross
Description: program with four errors

*/


let colors = new Map ()
// there are four errors

colors . set ( 'blue' , 'Water' );
colors . set ( 'green' , 'grass' );
colors . set ( 'red' , 'fire ') ; //DR - added ' before fire and changed "color" to "colors"
colors . set ( 'orange' ); // orange should have a value of undefined DR - removed "7" and comma so orange would be undefined

for ( let [ key , value ] of colors ){
console . log ( key + " = " + value );
}
