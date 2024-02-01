import express from 'express';
import addProduct from '../controllers/addProduct.controller.js';
import deleteProduct from '../controllers/deleteProduct.controller.js';
import editProduct from '../controllers/editProduct.controller.js';
import viewProducts from '../controllers/viewProduct.controller.js';
import searchProducts from '../controllers/searchProduct.controller.js';

const router = express.Router();

router.post('/addproduct', addProduct);
router.put('/editproduct/:productId', editProduct);
router.delete('/deleteproduct/:productId', deleteProduct);
router.get('/viewproduct', viewProducts);
router.get('/searchproduct', searchProducts)

export default router;

