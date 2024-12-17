class Person{

    perName:string;
    perLocation:string;
    perContact:number;

    constructor(name:string, loc:string, contact:number){
        this.perContact = contact;
        this.perName = name;
        this.perLocation = loc;
    }

    printDetails(){
        console.log(`Name : ${this.perName} Location : ${this.perLocation} Contact : ${this.perContact} `);
    }

}
// let personObj = new Person("ajay", "Chennai", 999999999);

// console.log(personObj.perName);
// personObj.printDetails();

export default Person;