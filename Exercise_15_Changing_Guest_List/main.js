"use strict";
let guest_List = ['Rdia', 'Zara', 'Mahek'];
for (let i = 0; i < guest_List.length; i++) {
    console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
}
let absent_Guest = 'Mahek';
let new_Guest = 'Ayesha';
guest_List[2] = new_Guest;
for (let i = 0; i < guest_List.length; i++) {
    console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
}
console.log(`${absent_Guest} is not coming to the party.`);
