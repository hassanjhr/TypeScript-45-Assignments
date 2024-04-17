"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function sandwich_Array(items) {
    console.log("\nMaking Sandwich: ");
    for (let i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your Sandwich\n");
}
sandwich_Array(['Parmesan Bread', 'Chicken', 'Cheese', 'Mayo Souce']);
sandwich_Array(['White Bread', 'Chocolate', 'Peanut Butter']);
sandwich_Array(['Brown Bread', 'Turkey', 'Cheese']);