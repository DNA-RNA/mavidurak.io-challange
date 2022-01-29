const express= require('express');
const router = express.Router();

const userDetailController = require('../Controllers/user_detail.contoller');
//getall
router.get('/',userDetailController.getUserDetailList);
//get by id
router.get('/:id',userDetailController.getUserDetailByID);
//create new 
router.post('/',userDetailController.addNewUserDetail);
//update 
router.put('/:id',userDetailController.updateUserDetail);
//delete
router.delete('/:id',userDetailController.deleteUserDetail);
module.exports = router;