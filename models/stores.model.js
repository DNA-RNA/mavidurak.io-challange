var dbConn = require('../config/db.config');

var Store = function(store){
    this.id = store.id;
    this.product_id= store.product_id;
    this.store_category_id = store.store_category_id;
    
}

Store.getAllStores = (result) => {
    dbConn.query('SELECT * FROM stores',(err,res)=>{
       if(!err) {        
        console.log('Test-stores');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}

//get by ıd
Store.getStoreByID = (id,result)=>{
    dbConn.query('SELECT * FROM stores WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-stores');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
  //create 
Store.addNewStore = (storeReqData,result)=>{
    dbConn.query('INSERT INTO stores SET ?',storeReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni store eklendi!');
          result(null,res);
       }
    })
 }
 //update 
Store.updateStore= (id,storeReqData,result)=>{
    dbConn.query("UPDATE stores SET product_id=?, store_category_id=?  WHERE id=?", [storeReqData.product_id,storeReqData.store_category_id, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('Store başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete 
Store.deleteStore=(id,result)=>{
    dbConn.query('DELETE FROM stores WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = Store;