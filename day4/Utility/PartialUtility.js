var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateObject1(A, toUpdate) {
    return __assign(__assign({}, A), toUpdate);
}
var Object2 = {
    a: 10,
    b: 20
};
var updatedObject1 = updateObject1(Object2, { b: 30 });
console.log(updatedObject1);
