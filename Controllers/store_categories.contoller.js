const StoreCategoryModel = require('../models/store_category.model');

exports.getStoreCategoryList = (req,res)=>{
    
    StoreCategoryModel.getAllStoreCategory((err,storeCategory)=>{
        console.log('store-category listing');
        if(err)
        res.send(err);
        console.log('Store-Category:',storeCategory);
        res.send(storeCategory);

    })
}

//getbyId
exports.getStoreCategoryByID = (req,res)=>{
     StoreCategoryModel.getStoreCategoryByID(req.params.id,(err,storeCategory)=>{
        if(err)
        res.send(err);
        console.log('Store-category by id:',storeCategory);
        res.send(storeCategory);
     })
}
exports.addNewStoreCategory = (req,res)=>{
    const storeCategoryReqData = new StoreCategoryModel(req.body);
    console.log('storeCategoryReqData',storeCategoryReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         StoreCategoryModel.addNewStoreCategory(storeCategoryReqData,(err,storeCategory)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'store-category başarıyla eklendi!', data: storeCategory.insertId});
             
         })
     }
}
exports.updateStoreCategory = (req,res)=>{
    console.log('storeCategoryReqData güncellendi!',storeCategoryReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         StoreCategoryModel.updateStoreCategory(req.params.id,storeCategoryReqData,(err,storeCategory)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Store-category başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteStoreCategory=(req,res)=>{
    StoreCategoryModel.deleteStoreCategory(req.params.id,(err,storeCategory)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'Store-category başarıyla silindi!'});
    })
}