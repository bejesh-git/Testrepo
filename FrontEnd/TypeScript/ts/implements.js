"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organizaiton = /** @class */ (function () {
    function Organizaiton(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    Organizaiton.prototype.empDetails = function () {
        return ("Id : ".concat(this.empId, " Name : ").concat(this.empName, " Contact : ").concat(this.empContact));
    };
    return Organizaiton;
}());
var orgObj = new Organizaiton(3242, "Ajay", 987668888);
console.log(orgObj.empDetails());
