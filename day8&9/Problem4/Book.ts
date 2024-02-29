// Create a TypeScript module with a class Book as the default export.
// Import the class in another file using a default import.

export default class Book{
    private Title:string;
    private Author:string;

    constructor(Title:string, Author:string){
        this.Title = Title ;
        this.Author = Author;
    }

    printname():string{
        return this.Title;
    }
}