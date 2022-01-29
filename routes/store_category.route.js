const express= require('express');
const router = express.Router();

const storeCategoryController = require('../Controllers/store_categories.contoller');
//getall
router.get('/',storeCategoryController.getStoreCategoryList);
//get by id
router.get('/:id',storeCategoryController.getStoreCategoryByID);
//create new 
router.post('/',storeCategoryController.addNewStoreCategory);
//update 
router.put('/:id',storeCategoryController.updateStoreCategory);
//delete
router.delete('/:id',storeCategoryController.deleteStoreCategory);
module.exports = router;