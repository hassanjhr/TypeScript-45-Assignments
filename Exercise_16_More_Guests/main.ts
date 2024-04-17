let guest_List : string[] = ['Rdia', 'Zara', 'Mahek'];
// for(let i = 0; i < guest_List.length; i++){
//     console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
// }

let absent_Guest : string = 'Mahek';
let new_Guest : string = 'Ayesha';

guest_List[2] = new_Guest;
for(let i = 0; i < guest_List.length; i++){
    console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
}

console.log(`${absent_Guest} is not coming to the party.\n\n`);

// <----------- Ex16 from now------------>

console.log('Good news for all my guest, i have found new Big Table. So, i am invting 3 more guests.');

guest_List.unshift('Mariam');
guest_List.splice(2,0,'Amna');
guest_List.push('Afsheen');

for(let i = 0; i < guest_List.length; i++){
    console.log('Hello ' + guest_List[i] + ',\n\n it is my pleasure to invite you in the party.\n\nThank You!\n\n');
}