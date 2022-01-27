var dbConn = require('../config/db.config');

var StoreCategory = function(storeCategory){
    this.id = storeCategory.id;
    this.category_name= storeCategory.category_name;
    this.category_adress=storeCategory.category_adress;
    this.category_size = storeCategory.category_size;
}

StoreCategory.getAllStoreCategory = (result) => {
    dbConn.query('SELECT * FROM store_categories',(err,res)=>{
       if(!err) {        
        console.log('Test-store-categories');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}
//get by ıd
StoreCategory.getStoreCategoryByID = (id,result)=>{
    dbConn.query('SELECT * FROM store_categories WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-store-category-id');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
 //create 
StoreCategory.addNewStoreCategory = (storeCategoryReqData,result)=>{
    dbConn.query('INSERT INTO store_categories SET ?',storeCategoryReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni store-category eklendi!');
          result(null,res);
       }
    })
 }
 //update
 StoreCategory.updateStoreCategory= (id,storeCategoryReqData,result)=>{
    dbConn.query("UPDATE store_categories SET category_name=?, category_adress=?, category_size=?  WHERE id=?", [storeCategoryReqData.category_name,storeCategoryReqData.category_adress,storeCategoryReqData.category_size, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('Store-category başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete 
StoreCategory.deleteStoreCategory=(id,result)=>{
    dbConn.query('DELETE FROM store_categories WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = StoreCategory;