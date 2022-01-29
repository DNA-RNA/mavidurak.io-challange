const StoreModel = require('../models/store.model');

exports.getStoreList = (req,res)=>{
    
    StoreModel.getAllStores((err,store)=>{
        console.log('store listing');
        if(err)
        res.send(err);
        console.log('Store:',store);
        res.send(store);

    })
}

//getbyId
exports.getStoreByID = (req,res)=>{
     StoreModel.getStoreByID(req.params.id,(err,store)=>{
        if(err)
        res.send(err);
        console.log('Store by id:',store);
        res.send(store);
     })
}
exports.addNewStore = (req,res)=>{
    const storeReqData = new StoreModel(req.body);
    console.log('storeReqData',storeReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         StoreModel.addNewStore(storeReqData,(err,store)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'store başarıyla eklendi!', data: store.insertId});
             
         })
     }
}
exports.updateStore = (req,res)=>{
    console.log('storeReqData güncellendi!',storeReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         StoreModel.updateStore(req.params.id,storeReqData,(err,store)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Store başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteStore=(req,res)=>{
    StoreModel.deleteStore(req.params.id,(err,store)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'Store başarıyla silindi!'});
    })
}