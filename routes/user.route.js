const express= require('express');
const router = express.Router();

const userController = require('../Controllers/user.controller');
//getall
router.get('/',userController.getUserList);
//get by id
router.get('/:id',userController.getUserByID);
//create new 
router.post('/',userController.addNewUser);
//update 
router.put('/:id',userController.updateUser);
//delete
router.delete('/:id',userController.deleteUser);
module.exports = router;