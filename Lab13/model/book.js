const books = [];
let idCounter = 1;

module.exports = class Book{
    constructor(id, title, ISBN, publishedDate, author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save(){
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    static getBooks(){
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

    updateBook(){
        const index = books.findIndex(book => book.id == this.id);
        if(index > -1){
            if(this.title){
                books[index].title = this.title;
            }
            if(this.ISBN){
                books[index].ISBN = this.ISBN;
            }
            if(this.publishedDate){
                books[index].publishedDate = this.publishedDate;
            }
            if(this.author){
                books[index].author = this.author;
            }
        }else{
            this.errorHandler(this.id);
        }
    }

    errorHandler(id){
        throw new Error(`Couldn't find book with the id: ${id}`);
    }
}