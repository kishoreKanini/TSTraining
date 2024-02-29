//Write a sample program for a typescript function having array of values and identify duplicate values using generics.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function ReturnDuplicateOfArray(arr) {
    if (arr.length > 0) {
        return undefined;
    }
    var arrTemp = new Set(arr);
    var returnArr = new Set();
    for (var i = 0; i < arr.length; i++) {
        if (!arrTemp.has(arr[i])) {
            returnArr.add(arr[i]);
        }
    }
    return __spreadArray([], returnArr, true);
}
var arr = [1, 2, 3, 4, 2, 6, 81, 1];
console.log(arr);
