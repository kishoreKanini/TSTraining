// Omit<Type, Keys> - constructs a type by picking all properties from "Type" except "Keys"

interface Todo{
    A:number;
    B:number;
    C:number;

} 

let a:Omit<Todo, "A"> = {
    B:20,
    C:30
}
// // passing A in thev object wil throw error 
