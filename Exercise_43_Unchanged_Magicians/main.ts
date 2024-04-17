// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.


let magician_List : string[] = ['Haad', 'Aqib', 'Jauhar', 'Ayub'];

function copy_MagicianList(copyList:string[]){
   return [...copyList]
}

let copy_List = copy_MagicianList(magician_List);


function make_Great(meg_List:string[]){
    for(let i =0; i<meg_List.length; i++)
        meg_List[i] = 'The Great '+ meg_List[i];
}
// Edited
make_Great(copy_List);



function show_Magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

console.log("\n\nOriginal Array\n");
show_Magicians(magician_List);

console.log("\n\nCopy Array\n");
show_Magicians(copy_List);


