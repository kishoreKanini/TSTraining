"use strict";
// Create a TypeScript module with a class Book as the default export.
// Import the class in another file using a default import.
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(Title, Author) {
        this.Title = Title;
        this.Author = Author;
    }
    Book.prototype.printname = function () {
        return this.Title;
    };
    return Book;
}());
exports.default = Book;
