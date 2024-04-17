"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_Color = 'green';
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// First Version:
if (alien_Color === 'green') {
    console.log("Version 1: The player earned 5 points.");
}
else if (alien_Color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_Color === 'red') {
    console.log("The player earned 15 points.");
}
else {
    console.log("You have selected the wrong color");
}
// Other versions of the program:
// 2nd Version:
alien_Color = 'yellow';
if (alien_Color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_Color === 'yellow') {
    console.log("Version 2: The player earned 10 points.");
}
else if (alien_Color === 'red') {
    console.log("The player earned 15 points.");
}
else {
    console.log("You have selected the wrong color");
}
// 3nd Version:
alien_Color = 'red';
if (alien_Color === 'green') {
    console.log("The player earned 5 points.");
}
else if (alien_Color === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_Color === 'red') {
    console.log("Version 3: The player earned 15 points.");
}
else {
    console.log("You have selected the wrong color");
}
