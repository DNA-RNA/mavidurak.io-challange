const UserModel = require('../models/user.model');

exports.getUserList = (req,res)=>{
    
    UserModel.getAllUsers((err,user)=>{
        console.log('user listing');
        if(err)
        res.send(err);
        console.log('Users:',user);
        res.send(user);

    })
}

//getbyId
exports.getUserByID = (req,res)=>{
     UserModel.getUserByID(req.params.id,(err,user)=>{
        if(err)
        res.send(err);
        console.log('User by id:',user);
        res.send(user);
     })
}
exports.addNewUser = (req,res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData',userReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         UserModel.addNewUser(userReqData,(err,user)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'User başarıyla eklendi!', data: user.insertId});
             
         })
     }
}
exports.updateUser = (req,res)=>{
    console.log('userReqData güncellendi!',userReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         UserModel.updateUser(req.params.id,userReqData,(err,user)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'User başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteUser=(req,res)=>{
    UserModel.deleteUser(req.params.id,(err,user)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'User başarıyla silindi!'});
    })
}