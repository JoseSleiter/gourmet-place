<template>
    <div class="modal" tabindex="-1"   :class="{'show-modal':showModal=== true}" v-show="showModal" role="dialog">
        {{setProductInf}}
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <template v-if="product_id == -1">
                        <h5 class="modal-title m-auto">NUEVO PLATILLO</h5>
                    </template>
                    <template v-if="product_id != -1">
                        <h5 class="modal-title m-auto">ACTUALIZANDO PLATILLO</h5>
                    </template>
                    <button type="button" class="close" @click="atSetShowModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img :src="require(`@/assets/`+setImgProduct)" width="250" class="rounded-circle plato-img">

                    <div class="form-group">
                      <label for="">Nombre del Plato</label>
                      <input type="text" name="name" id="name" class="form-control" v-model="modal.title" placeholder="Ingrese el nombre del plato">
                      <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>
                    <div class="form-group">
                        <label for="typePlato">Tipo de plato</label>
                        <select class="form-control" v-model="modal.type" id="typePlato">
                            <option value="Dinner">Dinner</option>
                            <option value="Lunch">Lunch</option>
                            <option selected value="Breakfast">Breakfast</option>
                        </select>
                      <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>
                    <div class="form-group">
                      <label for="">Precio</label>
                      <input type="number" min="0" name="price" id="price" class="form-control" v-model="modal.price" placeholder="0 $">
                      <!-- <small id="helpId" class="text-muted">Help text</small> -->
                    </div>
                </div>
                <div class="modal-footer">
                    <template v-if="product_id == -1">
                        <button type="button" class="btn btn-create" @click="createProduct()">Crear</button>
                    </template>
                    <template v-if="product_id != -1">
                        <button type="button" class="btn btn-update" @click="updateProduct()">Actualizar</button>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import shop from './../api/product'
import product from './../api/product';
export default {
    name: 'ModalComponent',
    props: {
        product_id: Number,
    },
    
    data(){
        return{
            modal: {
                id : -1,
                title : '',
                type : '',
                price : '',
                img : '',
                descripcion : '',

            },
            img1: "dinner1.jpg",
            img2: "lunch1.jpg",
            img3: "breakfast.jpg",
        }
    },

    computed:{
        ...mapState(['showModal']),

        setProductInf(){
            if (parseInt(this.product_id) == -1)
                this.newProduct()
            else    
                this.showProduct()
        },

        setImgProduct(){
            if (this.modal.type == "Dinner" ){
                return this.modal.img= this.img1
            }else if(this.modal.type == "Lunch" ){
                return this.modal.img= this.img2
            }
            else{
                return this.modal.img= this.img3
            }
            
        }

    },

    methods:{
        ...mapActions(['atSetShowModal']),
        newProduct(){     
            this.modal.id = -1
            this.modal.title = ''
            this.modal.type = 'Dinner'
            this.modal.price = ''
            this.modal.img = ''
            this.modal.descripcion = ''
        },
        
        showProduct(){
            shop.getProducts(products => {                
                this.modal =  Object.assign({}, products.filter((product => (
                    product.id === this.product_id
                )))[0])                              
            })
        },

        createProduct(){
            this.atSetShowModal()
            var objModal =  Object.assign({}, this.modal); 
            shop.storeProduct(objModal)
        },

        updateProduct(){
            this.atSetShowModal()
            shop.updateProduct(this.modal)    
        },

        
    },
    
}
</script>

<style >
    .modal{
        display: none;
    }
    .show-modal{
        display: block;
        background: rgb(0, 0, 0, 0.3);
    }
    .modal-header{
        background: #48cfad;
        color: white; 
    }
    .modal-header .close {
        margin: -1rem -1rem -1rem 0;
    }

    .btn-update, .btn-create{
        color: #fff;
        background-color: #223846;
        border-color: #223846; 
        outline: none;
    }
    .modal-body{
        text-align: center;
    }
    .modal-body .form-group{
        text-align: left;
    }
</style>