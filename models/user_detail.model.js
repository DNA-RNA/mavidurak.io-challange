var dbConn = require('../config/db.config');

var User_detail = function(user_detail){
    this.id = user_detail.id;
    this.first_name = user_detail.first_name;
    this.last_name = user_detail.last_name;
    this.telefon = user_detail.telefon;
}

User_detail.getAllUserDetails = (result) => {
    dbConn.query('SELECT * FROM user_details',(err,res)=>{
       if(!err) {        
        console.log('Test-user-details');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}

//get by ıd
User_detail.getUserDetailByID = (id,result)=>{
    dbConn.query('SELECT * FROM user_details WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-user-detail-id');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
 //create 
User_detail.addNewUserDetail = (user_detailReqData,result)=>{
    dbConn.query('INSERT INTO user_details SET ?',user_detailReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni user_detail eklendi!');
          result(null,res);
       }
    })
 }
 //update 
User_detail.updateUserDetail= (id,user_detailReqData,result)=>{
    dbConn.query("UPDATE user_details SET first_name=?,last_name=?,telefon=?  WHERE id=?", [user_detailReqData.first_mame,user_detailReqData.last_name,user_detailReqData.telefon, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('User_detail başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete 
User_detail.deleteUserDetail=(id,result)=>{
    dbConn.query('DELETE FROM user_details WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = User_detail;