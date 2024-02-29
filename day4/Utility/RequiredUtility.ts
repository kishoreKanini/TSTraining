interface Todo{
    A:number;
    B:number;
}

// Required<Todo> - all properties of Type 'Todo' are set to required.

let b :Required<Todo> = {
    A:10,
    B:30
};

