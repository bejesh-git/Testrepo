"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(pname, plocation, pcontact, eid, cname, epost) {
        var _this = _super.call(this, pname, plocation, pcontact) || this;
        _this.empId = eid;
        _this.compName = cname;
        _this.empPost = epost;
        return _this;
    }
    Company.prototype.printDetails = function () {
        console.log("Name : ".concat(this.perName, " Location : ").concat(this.perLocation, " Contact : ").concat(this.perContact, " EmpId : ").concat(this.empId, " CompName : ").concat(this.compName, " EmpPost : ").concat(this.empPost, " "));
    };
    return Company;
}(oops_1.Person));
var companyObj = new Company("Raheem", "mumbai", 999999999, 2351, "Chengepond", "Software developer");
companyObj.printDetails();
