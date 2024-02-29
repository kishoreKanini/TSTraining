interface Todo{
    a:number;
    b:number;
}

// Partial<Todo> - all properties of Type 'Todo' are set to optional.
// Partial meaning it may contain some or none of the properties
// toUpdate is a partial calss of interface 'Todo'

function updateObject1(A:Todo, toUpdate: Partial<Todo>){
    return{...A, ...toUpdate};
}

const Object2 : Todo = {
    a: 10,
    b: 20
}

const updatedObject1 = updateObject1(Object2, {b:30});
console.log(updatedObject1);


