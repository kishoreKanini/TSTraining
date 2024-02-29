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
var object1 = new Calculator(5, 8);
console.log(object1.add());
console.log(object1.subtract());
