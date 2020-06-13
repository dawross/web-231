/*
============================================
; Title: kimberlin-assignment-3.1.js
; Author: Rhiannon Kimberlin
; Date: 11 June 2020
; Modified By: Dan Ross
; Description: Discussion 3.1
;===========================================
*/
/*3 Errors*/
/*Should display mutual camping supplies*/
let willowsCampingSupplies = ['tent', 'portable charger', 'flashlight', 'bug spray'];
let kitsCampingSupplies = ['tent', 'fishing pole', 'grill', 'kayak', 'portable charger'];
let mutualCampingSupplies = [];
for (let i = 0; i < willowsCampingSupplies.length; i++) {
    for (let j = 0; j < kitsCampingSupplies.length; j++) {
        if (willowsCampingSupplies[j] === kitsCampingSupplies[i]) {
            mutualCampingSupplies.push(willowsCampingSupplies[i])
        }
    }
  } //added this to properly close the 'for' statement above

    /*3 Errors*/
    /*Should display 'I will visit Disneyworld, Disneyland, Tokyo Disney, Disneyland Paris, Hong Kong Disneyland, Shanghai Disney*/
    const disneyParks = ['DisneyWorld', 'Disneyland', 'Tokyo Disney', 'Disneyland Paris', 'Hong Kong Disneyland', 'Shanghai Disney']; //Changed () to [] since it's an array
    for (let i = 0;i < disneyParks.length;i++ ) {  //added additional + since ++ is the correct way to code an increment
        console.log('I will visit ' + disneyParks[i])  //added a space after "visit"
    }

