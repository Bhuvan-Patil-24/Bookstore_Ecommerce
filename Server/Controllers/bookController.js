import Book from "../models/Book.js";

// Get all books
export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve books" });
    }
};

// Get book by ID
export const getBookById = async (req, res, next) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ error: "Unable to retrieve book by ID" });
    }
};

// Add a new book
export const addBook = async (req, res, next) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: "Unable to add book" });
    }
}
