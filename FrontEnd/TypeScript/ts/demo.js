console.log("Demo TypeScript File");
// String Data
var fname;
fname = "Bejesh";
var lname = "Sriram";
console.log("FIrst Name ".concat(fname, " Last Name:").concat(lname));
//Number
var num1 = 100, num2 = 0.5;
console.log(num1, num2);
//boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//array
var courses = ['html', 'css', 'javascript', 'react'];
var courses2 = ['html', 'css', 'javascript', 'react'];
var number = [234, 234, 64, 7, 123, 13, 64, 56];
var number2 = [234, 234, 64, 7, 123, 13, 64, 56];
//tuple
var product = [234, 'name', true];
//enum: it create variable with constant value
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thur"] = 4] = "thur";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
//union: it allows us to assign single value of different datatype to a  single variable
var info = 23;
//any: when we don't know what type of data is going to stored in a variable.
var mix = true;
