const express = require('express');
const router = express.Router();

const {
    showProducts,
    showProductById,
    showProductsDashboard,
    showNewProduct,
    createProduct,
    showEditProduct,
    updateProduct,
    deleteProduct,
    } = require('../controllers/productController');
  

router.get('/products',showProducts);
router.get('/products/:productId',showProductById);
router.get('/dashboard',showProductsDashboard);
router.get('/dashboard/new',showNewProduct);
router.post('/dashboard',createProduct);
router.get('/dashboard/:productId/edit',showEditProduct)
router.put('/dashboard/:productId',updateProduct);
router.delete('/dashboard/:productId/delete',deleteProduct);

module.exports = router;
