// import { Person } from "./oops";
import Person1  from "./oops";



class Company extends Person1{
    empId:number;
    compName:string;
    empPost:string;
    
    constructor(pname:string, plocation:string, pcontact:number, eid:number, cname:string, epost:string){
        super(pname, plocation, pcontact);
        this.empId = eid;
        this.compName = cname;
        this.empPost = epost;
    }

    printDetails():void {
        console.log(`Name : ${this.perName} Location : ${this.perLocation} Contact : ${this.perContact} EmpId : ${this.empId} CompName : ${this.compName} EmpPost : ${this.empPost} `);

    }

}




let companyObj = new Company("Raheem", "mumbai", 999999999, 2351, "Chengepond", "Software developer");
companyObj.printDetails();