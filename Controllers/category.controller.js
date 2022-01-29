const CategoryModel = require('../models/category.model');

exports.getCategoryList = (req,res)=>{
    
    CategoryModel.getAllCategories((err,category)=>{
        console.log('category listing');
        if(err)
        res.send(err);
        console.log('Category:',category);
        res.send(category);

    })
}

//getbyId
exports.getCategoryByID = (req,res)=>{
     CategoryModel.getCategoryByID(req.params.id,(err,category)=>{
        if(err)
        res.send(err);
        console.log('Category by id:',category);
        res.send(category);
     })
}
exports.addNewCategory = (req,res)=>{
    const categoryReqData = new CategoryModel(req.body);
    console.log('categoryReqData',categoryReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         CategoryModel.addNewCategory(categoryReqData,(err,category)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Category başarıyla eklendi!', data: category.insertId});
             
         })
     }
}
exports.updateCategory = (req,res)=>{
    console.log('categoryReqData güncellendi!',categoryReqData);
    
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         CategoryModel.updateCategory(req.params.id,categoryReqData,(err,category)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Category başarıyla güncellendi!'});
             
         })
     }
}

exports.deleteCategory=(req,res)=>{
    CategoryModel.deleteCategory(req.params.id,(err,category)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'Category başarıyla silindi!'});
    })
}