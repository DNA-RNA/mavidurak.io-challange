const express= require('express');
var cors = require('cors');
var app= express();
const bodyparser= require('body-parser');
const Connection = require('mysql/lib/Connection');
const port = 8080;
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.setHeader('Accsess-Control-Allow-Origin','http://localhost:5500');
    res.send('helloo');
    
});

app.listen(port,()=>console.log('port no ${port} da çalışıyor'));


const productRoutes = require('./routes/product.route');
app.use('/api/products',productRoutes);

const userRoutes = require('./routes/user.route');
app.use('/api/users',userRoutes);

const userDetailRoutes = require('./routes/user_detail.route');
app.use('/api/userdetails',userDetailRoutes);

const roleRoutes = require('./routes/role.route');
app.use('/api/roles',roleRoutes);

const categoryRoutes = require('./routes/category.route');
app.use('/api/productcategories',categoryRoutes);

const storeRoutes = require('./routes/store.route');
app.use('/api/stores',storeRoutes);

const storeCategoryRoutes = require('./routes/store_category.route');
app.use('/api/storecategories',storeCategoryRoutes);
