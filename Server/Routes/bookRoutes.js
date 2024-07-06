import express from "express";
import { addBook, updateBook, deleteBook, getAllBooks, getBookById } from "../Controllers/bookController.js";
import { addBookToCart, getCart, deleteBookFromCart, addReviewToBook } from "../Controllers/userController.js"
import { isAuthenticated, isAdmin, isAuthorized } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get('/', getAllBooks);
router.get('/products/:productId', getBookById);
router.post('/products', isAuthenticated, isAdmin, addBook);
router.put('/products/:productId', isAuthenticated, isAdmin, updateBook);
router.delete('/products/:productId', isAuthenticated, isAdmin, deleteBook);
router.post('/addBookToCart/:userId', isAuthenticated, isAuthorized, addBookToCart);
router.get('/shopping-cart/:userId', isAuthenticated, isAuthorized, getCart);
router.delete('/shopping-cart/:userId/:productId', isAuthenticated, isAuthorized, deleteBookFromCart);
router.post('/products/:productId/reviews/:userId', isAuthenticated, addReviewToBook);

export default router;
