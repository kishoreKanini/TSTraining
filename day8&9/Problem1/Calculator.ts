// Create a TypeScript module with a class Calculator that has methods add and subtract. 
// Export the class and use it in another file


export class Calculator{
    private a:number;
    private b:number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    add():number{
        return this.a+this.b;
    }

    subtract():number{
        return this.a - this.b;
    }
}
