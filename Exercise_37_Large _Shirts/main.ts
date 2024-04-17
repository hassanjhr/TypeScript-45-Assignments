// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_Shirt(size:string = 'Large', text:string = 'I love TypeScript'){
    console.log(`Your T-Shirt size is ${size}, and the message is: ${text}`);
}

// shirts are large by default with a message that reads I love TypeScript.
make_Shirt();

// medium shirt with the default message.
make_Shirt("Medium");

// a shirt of any size with a different message.
make_Shirt("X-Large", "I love JavaScript");

