import express from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  addProductToCart,
  getProductFromCart,
  deleteProductFromCart,
  addReviewToProduct
} from "../Controller/product-controller.js";
import { isAuthenticated, isAdmin, isAuthorized } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', isAuthenticated, isAdmin, addProduct);
router.put('/products/:productId', isAuthenticated, isAdmin, updateProduct);
router.delete('/products/:productId', isAuthenticated, isAdmin, deleteProduct);
router.post('/addProductToCart/:userId', isAuthenticated, isAuthorized, addProductToCart);
router.get('/shopping-cart/:userId', isAuthenticated, isAuthorized, getProductFromCart);
router.delete('/shopping-cart/:userId/:productId', isAuthenticated, isAuthorized, deleteProductFromCart);
router.post('/products/:productId/reviews/:userId', isAuthenticated, addReviewToProduct);

export default router;
