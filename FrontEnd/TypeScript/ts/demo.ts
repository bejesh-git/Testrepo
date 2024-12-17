console.log("Demo TypeScript File");


// String Data
let fname:string;
fname="Bejesh";
let lname:string = "Sriram";

console.log(`FIrst Name ${fname} Last Name:${lname}`);


//Number
let num1:number = 100, num2:number=0.5;
console.log(num1,num2);


//boolean
let cond1:boolean=true, cond2:boolean=false;
console.log(cond1, cond2);



//array
let courses:string[] = ['html', 'css', 'javascript', 'react'];
let courses2:Array<string> = ['html', 'css', 'javascript', 'react'];

let number:number[] = [234,234,64,7,123,13,64,56];
let number2:Array<number> = [234,234,64,7,123,13,64,56];



//tuple
let product:[number, string, boolean] = [234,'name', true];



//enum: it create variable with constant value
enum days{sun, mon, tue, wed, thur, fri, sat};
let data1 = days.sun;


//union: it allows us to assign single value of different datatype to a  single variable
let info:number | string = 23;


//any: when we don't know what type of data is going to stored in a variable.
let mix:any=true;



