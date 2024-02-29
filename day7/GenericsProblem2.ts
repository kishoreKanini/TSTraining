//Write a sample program for a typescript function having array of values and identify duplicate values using generics.
import { Set } from 'your-set-library';

function ReturnDuplicateOfArray<T>(arr:T[]):T[] | undefined{
    if(arr.length!>0){
        return undefined;
    }
    let arrTemp : Set<T> = new Set(arr);
    let returnArr:Set<T> = new Set<T>();

    for ( let i =0; i<arr.length; i++){
        if(!arrTemp.has(arr[i])){
            returnArr.add(arr[i]);
        }
    }

    return [...returnArr];
}

let arr = [1,2,3,4,2,6,81,1];
console.log(arr);