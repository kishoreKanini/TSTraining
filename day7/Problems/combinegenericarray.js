// 3.Write a TypeScript function that accepts two arrays of the same length and merges them into a single array using generics.
function CombineArray(a, b) {
    if (a.length != b.length || a.length == 0) {
        throw new Error("length of array must be same");
    }
    for (var i = 0; i < b.length; i++) {
        a.push(b[i]);
    }
    return a;
}
console.log(CombineArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
