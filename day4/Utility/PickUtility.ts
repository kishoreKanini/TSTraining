// Pick<Type, Keys> - constructs a type by picking the set of properties Keys from Type.
interface Todo{
    A:number;
    B:number;
    C:number;
}

let a :Pick<Todo, "B" | "C"> = {
    B:10,
    C:50
}


console.log(a);
// passing A in thev object wil throw error
