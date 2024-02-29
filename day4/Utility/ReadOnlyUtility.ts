interface Todo1{
    A:number;
    B:number;
}

// Readonly<Todo> - all properties of Type 'Todo' are set to read only.

const a1: Readonly<Todo1> = {A:10, B:20};
// a1.A = 50; error because it is a readonly property
console.log(a1);
console.log(typeof(a1));
