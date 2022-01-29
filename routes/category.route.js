const express= require('express');
const router = express.Router();

const categoryController = require('../Controllers/category.controller');
//getall
router.get('/',categoryController.getCategoryList);
//get by id
router.get('/:id',categoryController.getCategoryByID);
//create new 
router.post('/',categoryController.addNewCategory);
//update 
router.put('/:id',categoryController.updateCategory);
//delete
router.delete('/:id',categoryController.deleteCategory);
module.exports = router;