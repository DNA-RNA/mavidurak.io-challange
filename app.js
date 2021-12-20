const anasayfa={template: `<h1>Burası Ana Sayfa</h1>`}
const anadepo={template: `
<table class="table table-striped">
<thead class="thead-dark">
 <tr>

     <th>
         Ürün Id
     </th>
     <th>
         Ürün Kodu
     </th>
     <th>
         Ürün Adı
     </th>
     <th>
         Stock Durumu
     </th>
     <th>
       Ürün ekle/sil
     </th>

  </tr>
  </thead>
  <tbody>
  <tr v-for="prdc in product">
   <td>{{prdc.id}}</td>
   <td>{{prdc.code}}</td>
   <td>{{prdc.name}}</td>
   <td>{{prdc.stock}}</td>
   <td> <button type="button" class="btn btn-outline-primary mr-1">Ürün ekle
   </button>
   <button type="button" class="btn btn-outline-danger mr-1">Ürün Sil
   </button>
   </td>

   
     
  </tr>
  </tbody>

</table>`,
data(){
    return{
        product:[]
    }
},
methods:{
    created(){
        fetch('./data.json')
        .then((res) => {return res.json()})
        .then((res) => {this.isLoading=false;
            
            this.product=res.product;
        
        })
        
    }

},
mounted:function(){
    this.created();
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
// window.addEventListener('load', () =>{
    
//     window.vue = new Vue({
        
//         data:{
//             isLoading: true,

//             product:[]

//         },
//         methods: {
//           deleteFromProduct(index){
//                this.product.splice(index,1);
//            }
//         },
//         created(){
//             fetch('./data.json')
//             .then((res) => {return res.json()})
//             .then((res) => {this.isLoading=false;
                
//                 this.product=res.product;
            
//             })
            
//         }
//     })
// }); 