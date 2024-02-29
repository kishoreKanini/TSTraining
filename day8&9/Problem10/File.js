// Write a TypeScript function that accepts a parameter of type unknown and uses type assertion to determine if it's a string.
// If it is a string, return the string; otherwise, return a default value.
function ReturnString(a) {
    if (typeof a === "string") {
        return a;
    }
    else {
        return "insert string";
    }
}
console.log(ReturnString("helo"));
console.log(ReturnString(12));
