"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magician_List = ['Haad', 'Aqib', 'Jauhar', 'Ayub'];
function make_Great(meg_List) {
    for (let i = 0; i < meg_List.length; i++)
        magician_List[i] = 'The Great ' + meg_List[i];
}
make_Great(magician_List);
function show_Magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_Magicians(magician_List);
