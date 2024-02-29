type car = {
    engine:string;
    mileage:number;
    Model:string;
    IsAvailable:boolean;
}

const sedan:car = {
    engine:"12 Cylinder",
    mileage:6,
    Model:"AUX4",
    IsAvailable:true
};
console.log(sedan);
console.log(typeof(sedan));
console.log(sedan.engine);