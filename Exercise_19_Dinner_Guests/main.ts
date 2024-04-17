let guest_List : string[] = ['Rdia', 'Zara', 'Mahek'];
// for(let i = 0; i < guest_List.length; i++){
//     console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
// }

let absent_Guest : string = 'Mahek';
let new_Guest : string = 'Ayesha';

guest_List[2] = new_Guest;
for(let i = 0; i < guest_List.length; i++){
    // console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
}

// console.log(`${absent_Guest} is not coming to the party.\n\n`);

// <----------- Ex16 from now------------>

// console.log('Good news for all my guest, i have found new Big Table. So, i am invting 3 more guests.');

guest_List.unshift('Mariam');
guest_List.splice(2,0,'Amna');
guest_List.push('Afsheen');

// for(let i = 0; i < guest_List.length; i++){
//     console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
// }


// <----------- Ex17 from now------------>

// Sorry Message to guest for not inviting
// console.log('\n\nSorry, i would like to bring this matter into your concern that the table i order will not be here anytime soor. Due to this, only two people will be invited for the party. \n\n');

// I have remove Guest from here
while(guest_List.length >2) {
    let remove_Guest = guest_List.pop();
    // console.log(`\nSorry ${remove_Guest}, you are not invited for the party\n`)
}

// Remaining invited Guest
// for(let i = 0; i < guest_List.length; i++){
//     console.log('Hello ' + guest_List[i] + ',\n\n You are still invited.\n\nThank You!\n\n');
// }


// I have removed all the Guests from the array
guest_List.splice(0,2);

// console.log(guest_List);


// <---------------Starting Ex19 from on onwards--------------->

// print a message indicating the number of people you are inviting to dinner.

console.log(`The total number of Guest remaing in the list: ${guest_List.length}`);


