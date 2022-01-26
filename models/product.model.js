var dbConn = require('../config/db.config');

var Product = function(product){
    this.id = product.id;
    this.product_name = product.product_name;
    this.product_code= product.product_code;
    this.stock= product.stock;
    this.purchase_date = product.purchase_date;
    this.purchase_price= product.purchase_price;
    this.sale_price = product.sale_price;
}
Product.getAllProducts = (result) => {
     dbConn.query('SELECT * FROM products',(err,res)=>{
        if(!err) {        
         console.log('Test-products');
          result(null,res);
          }     
         else{
           console.log(err);
        }
                  
        
     })
}
//get by ıd
Product.getProductByID = (id,result)=>{
   dbConn.query('SELECT * FROM products WHERE id=?',id,(err,res)=>{
      if(!err) {        
         console.log('Test-products-id');
          result(null,res);
          }     
         else{
           console.log(err);
           result(null,err);
        }
   })
}
//create product
Product.addNewProduct = (productReqData,result)=>{
   dbConn.query('INSERT INTO products SET ?',productReqData,(err,res)=>{
      if(err){
         console.log('Bir hata oluştu');
         result(null,err);
      }
      else {
         console.log('Yeni ürün eklendi!');
         result(null,res);
      }
   })
}
//update products
Product.updateProduct= (id,productReqData,result)=>{
   dbConn.query("UPDATE products SET product_name=?,product_code=?,stock=?,purchase_date=?,purchase_price=? WHERE id=?", [productReqData.product_mame,productReqData.product_code,productReqData.stock,productReqData.purchase_date,productReqData.purchase_price, id],
   (err,res)=>{
       if(err){
          console.log('Güncellerken bir sorun oluştu');
          result(null,err);
       }
       else{
          console.log('Ürün başarıyla güncellendi');
          result(null,res);
       }
   });
}
//delete products
Product.deleteProduct=(id,result)=>{
   dbConn.query('DELETE FROM products WHERE id=?',[id],(err,res)=>{
      if(err){
         console.log('Bir sorun oluştu!');
         result(null,err);
      }
      else{
         result(null,res);
      }
   })
}
module.exports = Product;