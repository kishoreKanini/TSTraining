class Calculator{
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
        return this.a-this.b;
    }
}

let object1= new Calculator(5,8);
console.log(object1.add());
console.log(object1.subtract());
