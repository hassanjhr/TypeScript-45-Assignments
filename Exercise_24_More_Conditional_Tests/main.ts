// Test no.1 for equality and inequality with strings:
console.log('String eqaulity test: ' , 'Hello World' === 'Hello World');

// Test no.2 for equality and inequality with strings:
console.log('String ineqaulity test: ' , ('Hello World'as string) != 'World');

// Test no.3 using the lower case function:
console.log('For lower case test: ', 'HELLO WORLD'.toLowerCase() === 'hello world');

// Test no.4 Numerical tests involving equality and inequality:
console.log('Test for number equality: ' , 5 === 5);

// Test no.5 Numerical tests involving inequality:
console.log('Test for number inequality: ' , (5 as number) != 10);

//Test no.6 greater than and less than:
console.log('Checking greater than: ' , 5 > 0);

//Test no.7 less than:
console.log('Checking less than: ' , 1 < 5);

//Test no.8 greater than or equal to:
console.log('greater than or equal to: ' , 12 >= 12);

// Test no.9 less than or equal to:
console.log('less than or equal to: ' , 2 <=10);

// Test no.10 using "and":
console.log('and operator: ', 12 > 2 && 48 < 100);

// Test no.11 using "or" operators:
console.log('or operator: ', 12 < 2 || 48 < 100);

// Test no.12 whether an item is in a array:
let animals : string[] = ['Lion', 'Elephant' , 'Dog', 'Cat'];
console.log('Array Test for "Lion": ', animals.includes('Lion')); 

// Test no.13 whether an item is not in a array:
console.log('"Monkey" not in array: ', !animals.includes('Monkey')); 







