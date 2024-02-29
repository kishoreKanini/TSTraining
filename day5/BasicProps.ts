interface student{
    Name:string;
    RollNo:number;
}

const DisplayStudent = (props:{Name:string, RollNo:number})=>{
    
    console.log(`Studemt: ${props.Name}`);
    console.log(`Studemt: ${props.RollNo}`);
}

let Ravi:student = {Name:"ravi", RollNo:21};
DisplayStudent(Ravi);