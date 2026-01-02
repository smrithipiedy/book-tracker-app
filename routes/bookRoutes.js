const express = require('express');
const router  = express.Router();

let books = [
    {id: 1, name: "Harry Potter", genre: "Fantasy", author: "JK Rowling"},
    {id: 2, name: "The Hunger Games", genre: "Action", author: "Suzanne Collins"}
];

router.get('/', (req, res) => {
    res.json(books);
});

// CREATE
router.post('/', (req, res) => {
    const newBook = req.body;
    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        books
    });
});

// UPDATE - Multiple
router.put('/', (req, res) => {
    const updates = req.body; // array of students

    updates.forEach(update => {
        books = books.map(book =>
            book.id === update.id
                ? { ...book, name: update.name }
                : book
        );
    });
});

// UPDATE 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedName = req.body.name;

    books = books.map(book =>
        book.id === id ? { ...book, name: updatedName } : book
    );

    res.json({
        message: "Book updated successfully",
        books
    });
});

// DELETE - Delete by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    books = books.filter(book => book.id !== id);

    res.json({
        message: "Book deleted successfully",
        books
    });
});

// DELETE - Multiple
router.delete('/', (req, res) => {
    const idsToDelete = req.body; 

    books = books.filter(
        book => !idsToDelete.includes(book.id)
    );

    res.json({
        message: "Book deleted successfully",
        books
    });
});

// EXPORT ROUTER
module.exports = router;