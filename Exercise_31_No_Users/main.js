"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let user_Names = ['admin', 'Haad', 'Aqib', 'Jauhar', 'Ayub'];
if (user_Names.length === 0) {
    console.log('We need to find some users!');
}
else {
    user_Names = [];
    console.log('User Names have been removed ' + user_Names.length);
}