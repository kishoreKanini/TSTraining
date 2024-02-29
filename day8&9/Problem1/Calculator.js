"use strict";
// Create a TypeScript module with a class Calculator that has methods add and subtract. 
// Export the class and use it in another file
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.add = function () {
        return this.a + this.b;
    };
    Calculator.prototype.subtract = function () {
        return this.a - this.b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
