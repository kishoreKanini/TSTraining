// Create a TypeScript function that accepts a parameter with a Union Type of string and number.
// Return the length of the string if the parameter is a string, and the squared value if it's a number
function ProcessInputdata(a) {
    if (typeof a === "number") {
        return a * a;
    }
    else if (typeof a === "string") {
        return a.length;
    }
    else {
        return 0;
    }
}
console.log(ProcessInputdata(24));
console.log(ProcessInputdata("asbjyhm"));
