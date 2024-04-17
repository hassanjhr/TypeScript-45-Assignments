// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magician_List : string[] = ['Haad', 'Aqib', 'Jauhar', 'Ayub'];

function show_Magicians(magicians:string[]){
    magicians.forEach(element => {
        console.log(element);
    });

}
show_Magicians(magician_List);

