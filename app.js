
const anasayfa={template: `
<div>

<h1 class="text-center">A Firması Depo Bilgileri</h1>
<table class="table table-striped">
<thead class="thead-dark">
 <tr>

     <th>
         Türü
     </th>
     <th>
         Adresi
     </th>
     <th>
         Kapasitesi
     </th>
     

  </tr>
  
  <tbody>
  
  <tr v-for="str in stores">
   <td>{{str.id}}</td>
   <td>{{str.product_id}}</td>
   <td>{{str.store_category_id}}</td>
  
  </tr>
  </tbody>
  </thead>
  </table>
  </div>
`, data(){
    return{
        stores:[],
      
    }
},
methods:{
   
    refreshData(){
      
        axios.get(variables.API_URL + "stores")
        .then((response)=>{this.stores=response.data});
    
    }

     
},
mounted:function(){
    this.refreshData();
}} 
const anadepo={template: `
<div>

<button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal"
data-bs-target="#exampleModal" v-on:click="addClick()">Ürün Ekle</button>
<table class="table table-striped">
<thead class="thead-dark">
 <tr>

     <th>
         Ürün Id
     </th>
     <th>
         Ürün Adı
     </th>
     <th>
         Ürün Kodu
     </th>
     <th>
         Stock Durumu
     </th>
     <th>
         Alış Fiyatı
     </th>
     <th>
          Satış Fiyatı
      </th>

     <th>
       Ürün ekle/sil
     </th>

  </tr>
  
  <tbody>
  <tr v-for="prdc in product">
   <td>{{prdc.id}}</td>
   <td>{{prdc.product_name}}</td>
   <td>{{prdc.prdct_code}}</td>
   <td>{{prdc.stock}}</td>
   <td>{{prdc.purchase_price}}</td>
   <td>{{prdc.sale_price}}</td>
   <td> <button type="button" class="btn btn-outline-primary mr-1" data-bs-toggle="modal"
   data-bs-target="#exampleModal" v-on:click="editClick(prdc)">Ürün Güncelle
   </button>
   <button type="button"  v-on:click="editClick(prdc,index)" class="btn btn-outline-danger mr-1">Ürün Sil
   </button>
   </td>   
  </tr>
  </tbody>
  </thead>
</table> 

<div class="modal fade" id="exampleModal" tabindex="-1"
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>

</div>
<div class="modal-body">
 <div class="input-group mb-3">
    <span class="input-group-text">Ürün İsmi</span>
    <input type="text" class="form-control" v-model="name">
 </div>

     <button type="button" v-on:click="createClick()" v-if="id==0" class="btn btn-primary">Ekle</button>
     <button type="button" v-on:click="updateClick()" v-if="id!=0" class="btn btn-primary">Güncelle</button>
</div>
</div>

</div>
</div>


</div>`,
data(){
    return{
        product:[],
        modalTitle:"",
        id:0,
        name:""
    }
},
methods:{
   
    refreshData(){
        axios.get(variables.API_URL + "products")
        .then((response)=>{this.product=response.data});
        
    }
    ,
    addClick(){
        this.modalTitle="Ürün Ekle" ;
        this.id=0;
        this.name="";
    },
    editClick(prdct){
        this.modalTitle="Ürün Güncelle" ;
        this.id=prdct.id;
        this.name=prdct.name;
    },
    createClick(){
        axios.post(variables.API_URL + "products",{
            name:this.name
        })
        .then((response)=>{this.refreshData();});
    },
    updateClick(){
        axios.put(variables.API_URL + "products",{
            name:this.name
        })
        .then((response)=>{this.refreshData();});
    }

},
mounted:function(){
    this.refreshData();
}}
const subedepo={template: `<h1>Burası Şube Depo ile ilgili</h1>`}
const routes=[
    {path:'/anasayfa',component: anasayfa},
    {path:'/anadepo',component:anadepo},
    {path:'/subedepo',component:subedepo}

]
const router=new VueRouter({
    routes
})
const app= new Vue({
    router
}).$mount('#app')
