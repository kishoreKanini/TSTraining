// Create two TypeScript objects, Person and Employee, with different properties.
// Write a function that takes an object with an Intersection Type of Person & Employee and prints the combined properties.

type Person = {
    Name:string;
    LastName:string;
}

type Employee = {
    Department:string;
    EmpId:number;
}

function DisplayUserData(user:Person&Employee){
    console.log(user.Name +" "+user.LastName);
    console.log(user);
}

var user:Person&Employee = {
    Name:"Abhijeet",
    LastName:"Bhattacharya",
    Department:"HR",
    EmpId:5
}

DisplayUserData(user);
