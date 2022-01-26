const express= require('express');
const router = express.Router();

const productController = require('../Controllers/product.controller');
//getall
router.get('/',productController.getProductList);
//get by id
router.get('/:id',productController.getProductsByID);
//create new products
router.post('/',productController.addNewProduct);
//update products
router.put('/:id',productController.updateProduct);
//delete
router.delete('/:id',productController.deleteProduct);
module.exports = router;
