var Person = /** @class */ (function () {
    function Person(id, name, loc) {
        this.pid = id;
        this.pname = name;
        this.plocation = loc;
    }
    Person.prototype.printDetails = function () {
        console.log("Id : ".concat(this.pid, " Name : ").concat(this.pname, " Location : ").concat(this.plocation));
    };
    return Person;
}());
var personObj = new Person(200, "ajay", "Chennai");
console.log(personObj.pname);
personObj.printDetails();
