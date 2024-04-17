// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// Create a variable called alien_color
let alien_Color : string = 'green';

// If it is, print a message that the player just earned 5 points.
if( alien_Color === 'green') {
    console.log('The player just earned 5 points.');
}

// Write one version of this program that passes the if test and another that fails
alien_Color = 'yellow';

if( alien_Color === 'green') {
    console.log('The player just earned 5 points.');  // he version that fails will have no output
}

