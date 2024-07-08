import express from "express";
import { addBook, updateBook, deleteBook, getAllBooks, getBookById } from "../Controllers/bookController.js";
import { addBookToCart, getCart, deleteBookFromCart, addReviewToBook } from "../Controllers/userController.js"
import { isAuthenticated, isAdmin, isAuthorized } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get('/allBooks', getAllBooks);
router.get('/bookById', getBookById);
router.post('/addBook', isAuthenticated, isAdmin, addBook);
router.put('/updateBook', isAuthenticated, isAdmin, updateBook);
router.delete('/deleteBook', isAuthenticated, isAdmin, deleteBook);
router.post('/addBookToCart/:userId', isAuthenticated, isAuthorized, addBookToCart);
router.get('/cart/:userId', isAuthenticated, isAuthorized, getCart);
router.delete('/cart/:userId/:bookId', isAuthenticated, isAuthorized, deleteBookFromCart);
router.post('/:bookId/reviews/:userId', isAuthenticated, addReviewToBook);

export default router;
