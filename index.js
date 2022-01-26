const express= require('express');
var app= express();
const bodyparser= require('body-parser');
const Connection = require('mysql/lib/Connection');
const port = 5500;
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send('helloo');
});

app.listen(port,()=>console.log('port no ${port} da çalışıyor'));
//getall fonksiyonları

const productRoutes = require('./routes/product.route');
app.use('/api/products',productRoutes);

// app.get('/roles',(req,res)=> {
    
//     mysqlConnection.query('SELECT * FROM roles',function (err,roles){
//         if(!err) {
//             console.log('Test-3');
//             res.send(roles);
//         }     
//         else 
//          console.log(err);
//     })
// });
