// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.


function car_Info(manufacturer:string, model_Name:string, ...exta_Option:{[key:string]:any}[]){
    let carInfo = {
        manufacturer,
        model_Name,
        ...Object.assign({},...exta_Option)
    }

    return carInfo;

}

let carDetails = car_Info("Toyota", "Carolla", {color:'White'}, {features: 'Top of the Line'});
console.log(carDetails);













// spld optr
// index signature {how much properties , name , class} when not confirm