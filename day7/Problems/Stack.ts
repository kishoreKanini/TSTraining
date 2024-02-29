// Implement a generic class called Stack that can hold elements of any data type. 
//Include methods for pushing, popping, and checking if the stack is empty.

class Stack<A>{
    stack:A[];

    constructor(stack:A[]){
        this.stack = stack;
    }

    push(a:A){
        if(this.IfStackEmpty()){
            this.stack.push(a);
        }
        else{
            this.stack.push(a);
            this.MoveLastElementToFirst();
        }
    }

    pop(){
        if(this.IfStackEmpty()){
            throw new Error("Empty Stack");
        }
        else{
            for(let i=0; i<this.stack.length-1;i++){
                this.stack[i] = this.stack[i+1];
            }
            this.stack.pop();
        }
    }

    private IfStackEmpty():boolean{
        return(this.stack.length == 0);
    }

    private MoveLastElementToFirst(){
        let tmp = this.stack[this.stack.length-1];
        for(let i=this.stack.length-1; i>0;i--){
            this.stack[i] = this.stack[i-1];
        }
        this.stack[0] = tmp;
    }
}

var a = new Stack<number>([1,2,3,4,5,6]);
a.push(70);
console.log(a.stack);
a.pop();
console.log(a.stack);
