var dbConn = require('../config/db.config');

var User = function(user){
    this.id = user.id;
    this.user_detail_id = user.user_detail_id;
    this.role_id=user.role_id;
}

User.getAllUsers = (result) => {
    dbConn.query('SELECT * FROM users',(err,res)=>{
       if(!err) {        
        console.log('Test-users');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}
//get by ıd
User.getUserByID = (id,result)=>{
    dbConn.query('SELECT * FROM users WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-users-id');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
 //create 
User.addNewUser = (userReqData,result)=>{
    dbConn.query('INSERT INTO users SET ?',userReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni user eklendi!');
          result(null,res);
       }
    })
 }
 //update 
User.updateUser= (id,userReqData,result)=>{
    dbConn.query("UPDATE users SET user_detail_id=?, role_id=?  WHERE id=?", [userReqData.user_detail_id,userReqData.role_id, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('User başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete 
User.deleteUser=(id,result)=>{
    dbConn.query('DELETE FROM users WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = User;