// 4.Create a generic function that swaps the positions of two elements in an array.
// The function should take the array and the indices of the elements to be swapped as parameters.
function SwapArrayPositions(a, b, arr) {
    var x = arr.findIndex(function (element) { return element === a; });
    var y = arr.findIndex(function (element) { return element === b; });
    if (x < 0 || y < 0) {
        throw new Error("Value does not exists");
    }
    var tmp = arr[y];
    arr[y] = arr[x];
    arr[x] = tmp;
    return arr;
}
console.log(SwapArrayPositions(5, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
