
const Product = require('../models/product.model');
const ProductModel = require('../models/product.model');

exports.getProductList = (req,res)=>{
    
    ProductModel.getAllProducts((err,products)=>{
        console.log('product listing');
        if(err)
        res.send(err);
        console.log('Products:',products);
        res.send(products);

    })
}

//getbyId
exports.getProductsByID = (req,res)=>{
     ProductModel.getProductByID(req.params.id,(err,product)=>{
        if(err)
        res.send(err);
        console.log('Product by id:',product);
        res.send(product);
     })
}
// create new products
exports.addNewProduct = (req,res)=>{
     const productReqData = new ProductModel(req.body);
     console.log('productReqData',productReqData);
     //null olup olmaması
      if(req.body.contructor === Object && Object(req.body).length ===0){
          res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
      }
      else{
          ProductModel.addNewProduct(productReqData,(err,product)=>{
                  if(err)
                  res.send(err);
                  res.json({status:true,message:'Ürün başarıyla eklendi!', data: product.insertId});
              
          })
      }
}
// update products
exports.updateProduct = (req,res)=>{
    console.log('productReqData güncellendi!',productReqData);
    //null olup olmaması
     if(req.body.contructor === Object && Object(req.body).length ===0){
         res.send(400).send({success: false,message:'Lütefen bilgileri eksiksiz giriniz'});
     }
     else{
         ProductModel.updateProduct(req.params.id,productReqData,(err,product)=>{
                 if(err)
                 res.send(err);
                 res.json({status:true,message:'Ürün başarıyla güncellendi!'});
             
         })
     }
}
//delete products
exports.deleteProduct=(req,res)=>{
    ProductModel.deleteProduct(req.params.id,(err,product)=>{
        if(err)
        res.send(err);
        res.json({success: true,message: 'Ürün başarıyla silindi!'});
    })
}