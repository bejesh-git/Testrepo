"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, loc, contact) {
        this.perContact = contact;
        this.perName = name;
        this.perLocation = loc;
    }
    Person.prototype.printDetails = function () {
        console.log("Name : ".concat(this.perName, " Location : ").concat(this.perLocation, " Contact : ").concat(this.perContact, " "));
    };
    return Person;
}());
exports.Person = Person;
// let personObj = new Person("ajay", "Chennai", 999999999);
// console.log(personObj.perName);
// personObj.printDetails();
