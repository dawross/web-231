
     /*
     ============================================
     ; Title:  discussion 4.1
     ; Author: Tiffany Baker
     ; Date:   6/17/2020
     ; Modified By: Dan Ross
     ; Description: creating and adding items to a list array.
     2 errors.
     ;===========================================
     */


    //creates an array.

    var list = [ "apples" , "steak" , "oranges" , "onions" ];

    //cycles through the list.
    for (i = 0; i < list.length; i++); //DR - replaced "list" with "for" since it's a for loop


    console.log(list);

    //shows the 3rd item in the list.
    console.log(list[2]); //DR - added "]" after "3" since it's an array. Changed "3" to "2" to show the third item in the list. Index starts at 0

     //adds item "chips" to list.
    list [list.length]= "chips";

    console.log(list);

