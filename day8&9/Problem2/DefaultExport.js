"use strict";
// Create a TypeScript module with a function greet as the default export.
// Export another function farewell as a named export. Use both functions in another file
Object.defineProperty(exports, "__esModule", { value: true });
exports.farewell = void 0;
function greet() {
    return "Hello!!";
}
exports.default = greet;
function farewell() {
    return "Bye!!";
}
exports.farewell = farewell;
