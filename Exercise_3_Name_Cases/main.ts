let personName : string = "";

personName = prompt("What is your name") || "";

let lowerCase : string = personName.toLocaleLowerCase();
let upperCase : string = personName.toLocaleUpperCase();
let titleCase : string = personName.split(" ").map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(" ");

if (personName !== null && personName !== "") {
    alert(`Hello ${personName}, your name with other cases:
    LowerCase: ${lowerCase}
    UpperCase: ${upperCase}
    TitleCase: ${titleCase}`)
}
else {
    alert("Please enter your name!")
}