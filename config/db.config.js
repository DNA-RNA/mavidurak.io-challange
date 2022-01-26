const mysql = require('mysql');
//mysql bağlantısı
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user :'root',
    password: 'sugarbrownie',
    database : 'mysqldb'
});

mysqlConnection.connect((err)=> {
  if(!err){
      console.log('Db connection basarili');
  }  
  else{
      console.log('Db connection basarisiz \n Error : ' + JSON.stringify(err,undefined,2));
   }
  
});

module.exports = mysqlConnection;