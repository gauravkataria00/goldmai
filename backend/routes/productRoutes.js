import express from 'express';
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct, addReview } from '../controllers/productController.js';
import { auth, vendorOnly } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', auth, vendorOnly, addProduct);
router.put('/:id', auth, vendorOnly, updateProduct);
router.delete('/:id', auth, vendorOnly, deleteProduct);
router.post('/:id/reviews', auth, addReview);

export default router;
