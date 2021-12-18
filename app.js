window.addEventListener('load', () =>{
  window.vue = new Vue({
        el: '#app',
        data:{
            isLoading: true,
            product:[]

        },
        created(){
            fetch('./data.json')
            .then((res) => {return res.json()})
            .then((res) => {this.isLoading=false;
                
                this.product=res.product;
            
            })
            
        }
    })
});