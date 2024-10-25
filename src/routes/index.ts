import express from "express";
import Book from "../model/book"; // Assuming Book model is defined in ../model/book.ts

const router = express.Router();

// Get all books (using async/await for better readability)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({}); // Find all documents in the Book collection
        res.send(books);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send('An error occurred while fetching books.'); // Send a generic error message to the client
    }
});

// Create a book (using validation)
router.post('/insert', async (req, res) => {
    const { writer, title, pages } = req.body;

    // Basic validation (consider using a library like Joi for more robust validation)
    if (!writer || !title || pages <= 0) {
        return res.status(400).send('Invalid book data. Please provide all required fields and ensure pages are positive.');
    }

    try {
        const newBook = new Book({ writer, title, pages });
        const savedBook = await newBook.save(); // Save the book to the database
        res.status(201).send(savedBook); // Send the created book back to the client with a 201 Created status code
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send('An error occurred while creating the book.'); // Send a generic error message to the client
    }
});

export default router