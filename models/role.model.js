var dbConn = require('../config/db.config');

var Role = function(role){
    this.id = role.id;
    this.role_name = role.role_name;
}

Role.getAllRoles = (result) => {
    dbConn.query('SELECT * FROM roles',(err,res)=>{
       if(!err) {        
        console.log('Test-roles');
         result(null,res);
         }     
        else{
          console.log(err);
       }
                 
       
    })
}

//get by ıd
Role.getRolesByID = (id,result)=>{
    dbConn.query('SELECT * FROM roles WHERE id=?',id,(err,res)=>{
       if(!err) {        
          console.log('Test-role-id');
           result(null,res);
           }     
          else{
            console.log(err);
            result(null,err);
         }
    })
 }
 //create role
Role.addNewRole = (roleReqData,result)=>{
    dbConn.query('INSERT INTO roles SET ?',roleReqData,(err,res)=>{
       if(err){
          console.log('Bir hata oluştu');
          result(null,err);
       }
       else {
          console.log('Yeni rol eklendi!');
          result(null,res);
       }
    })
 }
 //update role
Role.updateRole= (id,roleReqData,result)=>{
    dbConn.query("UPDATE roles SET role_name=?  WHERE id=?", [roleReqData.role_mame, id],
    (err,res)=>{
        if(err){
           console.log('Güncellerken bir sorun oluştu');
           result(null,err);
        }
        else{
           console.log('Role başarıyla güncellendi');
           result(null,res);
        }
    });
 }
 //delete role
Role.deleteRole=(id,result)=>{
    dbConn.query('DELETE FROM roles WHERE id=?',[id],(err,res)=>{
       if(err){
          console.log('Bir sorun oluştu!');
          result(null,err);
       }
       else{
          result(null,res);
       }
    })
 }
 module.exports = Role;