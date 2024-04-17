var personName = "";
personName = prompt("What is your name") || "";
var lowerCase = personName.toLocaleLowerCase();
var upperCase = personName.toLocaleUpperCase();
var titleCase = personName.split(" ").map(function (word) { return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase(); }).join(" ");
if (personName !== null && personName !== "") {
    alert("Hello ".concat(personName, ", your name with other cases:\n    LowerCase: ").concat(lowerCase, "\n    UpperCase: ").concat(upperCase, "\n    TitleCase: ").concat(titleCase));
}
else {
    alert("Please enter your name!");
}
