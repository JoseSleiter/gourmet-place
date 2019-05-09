<template>   
  <div class="container  mt-4">
    <div class="row">
      <div class="col-md-12">
        <!-- search -->
        <div class="row mt-4 d-flex">
          <div class="search-containerr col-md-12 d-flex justify-content-center search">  
              <!-- Add-product-search -->
              <a class="btn btn-link btn-block col-md-2 btn-create-product"  @click="showModalFunct(-1)">                
                <i class="icon fa-plus"></i> New Plate
              </a>             
              <div class="col-md-7">
                <input class="form-control mr-sm-2 border-right-0" type="search" v-model="name_plato">
                <span class="input-group-addon icon-search border-left-0"><i class="icon fa-search"></i></span>
              </div>      
          </div>      
        </div>    

        <!-- Modal -->
        <ModalComponent :product_id="product_id" />

        <!-- Products-list-container -->
        <div class="row"> 
          <div class="search-containerr col-md-12">
            <div class="row">
              <!-- Add-Product -->
              <div class="col-xs-12 col-sm-6 col-md-4 mt-4 create-product-container">
                <div class="card" @click="showModalFunct(-1)" style=" text-align: center;">
                  <div class="card-read-more">
                      <a class="btn btn-link btn-block">
                        <i class="icon fa-plus"></i> New Plate
                      </a>
                    </div>
                </div>
              </div>
              <!-- Products-list -->
              <div class="col-xs-12 col-sm-6 col-md-4 mt-4" v-for="(product, index) in showProducts" :key="product.id">                
                <div class="card">
                  <button type="button" class="product close" title="Eliminar" @click="deletedProduct(index)">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <img class="card-img-top"  @click="showModalFunct(product.id)" :src="require(`@/assets/`+product.img)" alt="Card image cap">
                  <div class="card-body"  @click="showModalFunct(product.id)">
                    <h6 class="card-subtitle mb-2 text-muted">Type: {{product.type}}</h6>
                    <h4 class="card-title">{{product.title}}</h4>
                    <span class="price" style="color: #48cfad;
                      font-size: 22px;
                      font-weight: 600;"
                      >{{product.price}} $</span>  
                  </div>                         
                </div>
              </div>  
          
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  
</template>

<script>
import ModalComponent from './ModalComponent';
import shop from './../api/product'
import { mapState, mapActions} from 'vuex'

export default {
  name: 'ProductList',
  components: {
    ModalComponent
   
  },


  props: {
    msg: String
  },


  data(){
    return {
      products: [],
      product_id: -1,
      name_plato: "",
    }
  },


  computed:{
    showProducts(){
      return this.products.filter((products) => {
        return products.title.toLowerCase().includes(this.name_plato.toLowerCase());
      });
    }
  },


  methods:{
    ... mapActions(['atSetShowModal']),

    showModalFunct(id){
      this.product_id = id
      this.atSetShowModal();

    },

    deletedProduct(id){
      console.log(id)
      var algo = shop.deletedProduct(id)
        
      console.log(algo)
    }
      
  },


  created(){
    shop.getProducts( products => {
      this.products = products    
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.search{
    padding: 20px 12px 20px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    background: #48cfad;
    border-bottom: 1px solid #48cfad;
}
input[type="search"]{
  border-top: none;
  background: #48cfad;
  /* outline: none !important; */
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #fff;
  color: white;
}
input[type="search"]:focus{
  border-bottom: 2px solid #fff; 
  /* e0e0e0 */
  box-shadow: none;
  outline: 0 none;
}

.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.card:hover > .card-body h4.card-title{
  color: white;
}
.card{
  transition: all .3s ease;
  cursor: pointer;
  overflow: hidden;
}
.card .card-body{
  position: relative;
  z-index: 1;
}
.card .card-body::before {
    content: '';
    width: 200%;
    height: 100px;
    position: absolute;
    display: block;
    background-color: #fff;
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
    top: -50px;
    left: -10%;
    z-index: -1;
    transition: all 0.3s ease-in;
}
.card:hover .card-body::before {
    background-color: #223846;
}
.card:hover .card-body {
    background-color: #223846;
}
.card:hover .card-read-more {
  color: white;  
}
.price{
  text-align: center;
  font-size: 2em;
  font-weight: 900;
  display: block;
  width: 100px;
  margin: 16px auto 0;
  position: relative;
}
.price::before, .price::after{
  content: '';
  height: 1px;
  width: 50px;
  display: block;
  position: absolute;
  background-color: #ddd;
  top: 18px;
}
.price::before{
  left: -50px;
}
.price::after{
  right: -50px;
}
.card .product.close{
  position: absolute;
  outline: none;
  right: -2px;
  font-size: 4.5em;
  color: red;
  top: -14px;
  z-index: 2;
}

.icon{
  font-family: fontawesome;
}
span.icon-search {
  position: absolute;
  top: 0px;
  right: 8px;
  color: white;
  font-size: 22px;
}
.icon::before {
  display: inline-block;
  margin-right: .5em;
  font: normal 20px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}

.create-product-container{
    position: sticky;
    top: 1px;
    z-index: 4;
}

a.btn.btn-link.btn-block.col-md-2.btn-create-product{
  background: #223846 !important;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0px;
  left: 19px;
  position: absolute;
}
.create-product-container{
  display: none;
}
@media only screen and (max-width: 750px)  {
  a.btn.btn-link.btn-block.col-md-2.btn-create-product{
    display: none;
  }

  .create-product-container{
    display: block;
    font-weight: bold;
    text-transform: uppercase;  
  }

  .create-product-container a{
    background: #223846 !important;
    color: white;
  }
}

</style>
