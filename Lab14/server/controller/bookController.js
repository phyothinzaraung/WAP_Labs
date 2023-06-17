const Book = require("../model/book");

exports.save = (req, res, next) => {
    const book = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).saveBook();
    res.status(201).json(book);
}

exports.fetchBooks = (req, res, next) => {
    res.json(Book.fetchAllBooks());
}

exports.getBookById = (req, res, next) => {
    const book = Book.getBookById(req.params.id);
    res.json(book);
}

exports.deleteBook = (req, res, next) => {
    new Book(req.params.id).deleteBook();
    res.status(204).end();
}

exports.updateBook = (req, res, next) => {
    new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).editBook();
    res.status(204).end();
}