// Write a TypeScript function that accepts a parameter and checks if it's of type string or number.
// If it's a string, convert it to uppercase; if it's a number, return its square.

function ProcessInputdata(a:number|string):number|string{
    if(typeof a === "number"){
        return a*a;
    }
    else if(typeof a === "string"){
        return a.toUpperCase();
    }
    else{
        return 0;
    }
}

console.log(ProcessInputdata(24));
console.log(ProcessInputdata("asbjyhm"));