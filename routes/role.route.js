const express= require('express');
const router = express.Router();

const roleController = require('../Controllers/role.controller');
//getall
router.get('/',roleController.getRoleList);
//get by id
router.get('/:id',roleController.getRolesByID);
//create new 
router.post('/',roleController.addNewRole);
//update 
router.put('/:id',roleController.updateRole);
//delete
router.delete('/:id',roleController.deleteRole);
module.exports = router;