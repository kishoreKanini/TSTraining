// Create a TypeScript type for a shape that can be either a square or a circle.
// Use a Discriminated Union to distinguish between the two shapes.
// Implement a function that calculates the area based on the shape

type Square ={
    length:number;
}

type Circle = {
    radius:number;
}

function area(shape:Square|Circle):number{
    if('length' in shape){
        return shape.length*shape.length;
    }

    else if('radius' in shape){
        return Math.PI*shape.radius*shape.radius;
    }
    else{
        return 0;
    }
}

let a:Square|Circle = {length:7};
console.log(area(a));
a = {radius:7};
console.log(area(a));