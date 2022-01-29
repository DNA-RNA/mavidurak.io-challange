const RoleModel = require('../models/role.model');

exports.getRoleList = (req,res)=>{
    
    RoleModel.getAllRoles((err,roles)=>{
        console.log('roles listing');
        if(err)
        res.send(err);
        console.log('Roles:',roles);
        res.send(roles);

    })
}

//getbyId
exports.getRolesByID = (req,res)=>{
     RoleModel.getRolesByID(req.params.id,(err,roles)=>{
        if(err)
        res.send(err);
        console.log('Roles by id:',roles);
        res.send(roles);
     })
}
exports.addNewRole = (req,res)=>{
    const roleReqData = new RoleModel(req.body);
    console.log('roleReqData',roleReqData);
    //null olup olmaması
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         ProductModel.addNewRole(roleReqData,(err,role)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Role başarıyla eklendi!', data: role.insertId});
             
         })
     }
}
exports.updateRole = (req,res)=>{
    console.log('roleReqData güncellendi!',roleReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         RoleModel.updateRole(req.params.id,roleReqData,(err,role)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Role başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteRole=(req,res)=>{
    RoleModel.deleteRole(req.params.id,(err,role)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: ' Role başarıyla silindi!'});
    })
}