// Create a TypeScript module with an interface Person and a function printName.
// Import the module with an alias and use the alias to call the function.
export interface Person{
    Name:string;
    LastName:string;
}

export function printName(person:Person):string{
    return `${person.Name} ${person.LastName}`;
}

let a:Person = {
    Name:"A",
    LastName:"B"
};

console.log(printName(a));