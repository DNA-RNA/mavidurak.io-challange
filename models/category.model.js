var dbConn = require('../config/db.config');

var Category = function(category){
    this.id = category.id;
    this.category_name = category.category_name;
    this.description=category.description;
}

Category.getAllCategories = (result) => {
    dbConn.query('SELECT * FROM categories',(err,res)=>{
       if(!err) {        
        console.log('Test-categories');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}
//get by ıd
Category.getCategoryByID = (id,result)=>{
    dbConn.query('SELECT * FROM categories WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-category-id');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
 //create category
Category.addNewCategory = (categoryReqData,result)=>{
    dbConn.query('INSERT INTO categories SET ?',categoryReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni category eklendi!');
          result(null,res);
       }
    })
 }
 //update category
Category.updateCategory= (id,categoryReqData,result)=>{
    dbConn.query("UPDATE categories SET category_name=?, description=?  WHERE id=?", [categoryReqData.category_name,categoryReqData.description, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('Category başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete category
Category.deleteCategory=(id,result)=>{
    dbConn.query('DELETE FROM categories WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = Category;