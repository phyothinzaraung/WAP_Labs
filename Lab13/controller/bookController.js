const Book = require("../model/book");

exports.save = (req, res, next) => {
    let book = new Book(null, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.status(201).json(book);
}

exports.fetchAll = (req, res, next) => {
    res.json(Book.getBooks());
}

exports.getBookById = (req, res, next) => {
    res.json(Book.getBookById(req.params.id));
}

exports.deleteBook = (req, res, next) => {
    new Book(req.params.id).deleteBook();
    res.status(204).end();
}

exports.updateBook = (req, res, next) => {
    new Book(req.params.id, req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).updateBook();
    res.status(204).end();
}