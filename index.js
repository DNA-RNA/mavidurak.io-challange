const mysql = require('mysql');
const express= require('express');
var app= express();
const bodyparser= require('body-parser');
const Connection = require('mysql/lib/Connection');
const port = 5500;
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
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
app.listen(port,()=>console.log('port no 5500 da çalışıyor'));
//getall
app.get('/products',(req,res)=> {
    
    mysqlConnection.query('SELECT * FROM products',function (err,rows,fields){
        if(!err) {
            console.log('Test');
            res.send(rows);
        }     
        else 
         console.log(err);
    })
   
});

app.get('/users',(req,res)=> {
    
    mysqlConnection.query('SELECT * FROM users',function (err,users){
        if(!err) {
            console.log('Test-2');
            res.send(users);
        }     
        else 
         console.log(err);
    })
});

