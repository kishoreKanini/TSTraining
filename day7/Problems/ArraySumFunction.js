// 1.Write a TypeScript function that takes an array of numbers as input and returns the sum of the numbers using generics.
function ReturnSum(arr) {
    if (arr.length == 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(ReturnSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
