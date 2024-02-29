// Sample function with array of numbers and idenitfying the first element.
function ReturnFirstElement<T>(a:T[]):T | undefined{
    return a.length>0?a[0]:undefined;
}

let a = [10,20,30,44]
console.log(ReturnFirstElement(a));