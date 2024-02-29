"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printName = void 0;
function printName(person) {
    return "".concat(person.Name, " ").concat(person.LastName);
}
exports.printName = printName;
var a = {
    Name: "A",
    LastName: "B"
};
console.log(printName(a));
