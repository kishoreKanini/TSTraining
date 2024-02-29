// Implement a generic class called Stack that can hold elements of any data type. 
//Include methods for pushing, popping, and checking if the stack is empty.
var Stack = /** @class */ (function () {
    function Stack(stack) {
        this.stack = stack;
    }
    Stack.prototype.push = function (a) {
        if (this.IfStackEmpty()) {
            this.stack.push(a);
        }
        else {
            this.stack.push(a);
            this.MoveLastElementToFirst();
        }
    };
    Stack.prototype.pop = function () {
        if (this.IfStackEmpty()) {
            throw new Error("Empty Stack");
        }
        else {
            for (var i = 0; i < this.stack.length - 1; i++) {
                this.stack[i] = this.stack[i + 1];
            }
            this.stack.pop();
        }
    };
    Stack.prototype.IfStackEmpty = function () {
        return (this.stack.length == 0);
    };
    Stack.prototype.MoveLastElementToFirst = function () {
        var tmp = this.stack[this.stack.length - 1];
        for (var i = this.stack.length - 1; i > 0; i--) {
            this.stack[i] = this.stack[i - 1];
        }
        this.stack[0] = tmp;
    };
    return Stack;
}());
var a = new Stack([1, 2, 3, 4, 5, 6]);
a.push(70);
console.log(a.stack);
a.pop();
console.log(a.stack);
