import IEmployee1 from "./interface";

class Organizaiton implements IEmployee1{
    empId: number;
    empContact: number;
    empName: string;

    constructor(id:number, name:string, contact:number){
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }

    empDetails(): string {
        return (`Id : ${this.empId} Name : ${this.empName} Contact : ${this.empContact}`);
    }
}


let orgObj = new Organizaiton(3242, "Ajay", 987668888);
console.log(orgObj.empDetails());