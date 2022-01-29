const express= require('express');
const router = express.Router();

const storeController = require('../Controllers/store.contoller');
//getall
router.get('/',storeController.getStoreList);
//get by id
router.get('/:id',storeController.getStoreByID);
//create new 
router.post('/',storeController.addNewStore);
//update 
router.put('/:id',storeController.updateStore);
//delete
router.delete('/:id',storeController.deleteStore);
module.exports = router;