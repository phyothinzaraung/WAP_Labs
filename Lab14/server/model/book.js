const books = [
    {
        "id": 1,
        "title": "python",
        "ISBN": 98765,
        "publishedDate": "Feb 1",
        "author": "AAA"
    },
    {
        "id": 2,
        "title": "java",
        "ISBN": 12345,
        "publishedDate": "Feb 1",
        "author": "AAA"
    },
    {
        "id": 3,
        "title": "design pattern",
        "ISBN": 67890,
        "publishedDate": "Feb 1",
        "author": "AAA"
    }
];
let idCounter = 4;

module.exports = class Book{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    saveBook(){
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    static fetchAllBooks(){
        return books;
    }

    static getBookById(id){
        const book = books.find(book => book.id == id);
        if(book){
            return book;
        }else{
            this.errorHandler(id);
        }
    }

    deleteBook(){
        const index = books.findIndex(book => book.id == this.id);
        if(index > -1){
            books.splice(index, 1);
        }else{
            this.errorHandler(this.id);
        }
    }

    editBook(){
        const index = books.findIndex(book => book.id == this.id);
        if(index > -1){
            books[index] = this;
        }else{
            this.errorHandler(this.id);
        }
    }

    errorHandler(id){
        console.log(`Couldn't find the book with the id: ${id}`);
    }
}