const UserDetailModel = require('../models/user_detail.model');

exports.getUserDetailList = (req,res)=>{
    
    UserDetailModel.getAllUserDetails((err,user)=>{
        console.log('user-detail listing');
        if(err)
        res.send(err);
        console.log('User-detail:',user);
        res.send(user);

    })
}

//getbyId
exports.getUserDetailByID = (req,res)=>{
     UserDetailModel.getUserDetailByID(req.params.id,(err,userDetail)=>{
        if(err)
        res.send(err);
        console.log('Userdetail by id:',userDetail);
        res.send(userDetail);
     })
}
exports.addNewUserDetail = (req,res)=>{
    const userDetailReqData = new UserDetailModel(req.body);
    console.log('userReqData',userDetailReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         UserDetailModel.addNewUserDetail(userDetailReqData,(err,userDetail)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'User-detail başarıyla eklendi!', data: userDetail.insertId});
             
         })
     }
}
exports.updateUserDetail = (req,res)=>{
    console.log('userDetailReqData güncellendi!',userDetailReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         UserDetailModel.updateUserDetail(req.params.id,userDetailReqData,(err,userDetail)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'User-detail başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteUserDetail=(req,res)=>{
    UserDetailModel.deleteUserDetail(req.params.id,(err,userDetail)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'User-detail başarıyla silindi!'});
    })
}