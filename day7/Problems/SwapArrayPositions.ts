// 4.Create a generic function that swaps the positions of two elements in an array.
// The function should take the array and the indices of the elements to be swapped as parameters.

function SwapArrayPositions<T = number|string|boolean>(a:T, b:T, arr:T[]):T[]{
    let x = arr.findIndex((element) => element === a);
    let y = arr.findIndex((element) => element === b);
    if(x<0||y<0){
        throw new Error("Value does not exists")
    }
    let tmp = arr[y];
    arr[y] = arr[x];
    arr[x] = tmp;

    return arr;
}

console.log(SwapArrayPositions<number>(5,8,[1,2,3,4,5,6,7,8,9]));