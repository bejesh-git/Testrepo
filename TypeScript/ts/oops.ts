class Person{

    pid:number;
    pname:string;
    plocation:string;

    constructor(id:number, name:string, loc:string){
        this.pid = id;
        this.pname = name;
        this.plocation = loc;
    }

    printDetails(){
        console.log(`Id : ${this.pid} Name : ${this.pname} Location : ${this.plocation}`);
    }

}


let personObj = new Person(200, "ajay", "Chennai");

console.log(personObj.pname);
personObj.printDetails();