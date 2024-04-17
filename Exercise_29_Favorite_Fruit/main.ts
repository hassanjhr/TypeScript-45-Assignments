// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_Fruits : string[] = ['Apple', 'Banana', 'Orange'];

if(favorite_Fruits.includes('Apple')){
    console.log("I really Like Apples")
}

if(favorite_Fruits.includes('Banana')){
    console.log("I really Like Bananas")
}

if(favorite_Fruits.includes('Orange')){
    console.log("I really Like Oranges")
}

if(favorite_Fruits.includes('Pineapple')){
    console.log("I really Like Pineapples")
}

if(favorite_Fruits.includes('Mango')){
    console.log("I really Like Mangos")
}