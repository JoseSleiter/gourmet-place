const _products = [
  {"id": 1, "title": "Karee Gyudon", "price": 50.01, "descripcion": "Arroz con curry amarillo Thai, carrillera de ternera, cebolla, zanahoria, dashi y cebolleta tierna", "type": "Dinner", "img": 'dinner1.jpg'},
  {"id": 2, "title": "Dorayaki", "price": 10.99, "descripcion": "Postre tradicional relleno de yuzu y con helado de té verde matcha.","type": "Lunch", "img": 'lunch1.jpg'},
  {"id": 3, "title": "Corral Chicken Pekín", "price": 19.99, "descripcion": "Pechuga de pollo de corral marinada al estilo chino con salsa hoisin, puerro, pepino y crepes chinas.", "type": "Breakfast", "img": 'breakfast.jpg'}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 300)
  },

  storeProduct(product){
      setTimeout(() => { 
          product.id =  Math.round(Math.random()*900000);
          _products.push(product) }, 300)
  },

  updateProduct(product){
    setTimeout(() => (_products.filter( element => (element.id == product.id) )
                               .map( element => (this.copyProduc(element, product)) )
                     ), 300) 
  },

  deletedProduct(index){
    setTimeout(() => ( _products.splice(index, 1)), 300) 
  },
  
  copyProduc(element, product){
    element.id= product.id
    element.title= product.title
    element.price= product.price
    element.descripcion= product.descripcion
    element.type= product.type
    element.img= product.img

  },
  getCountProduct(cb){
    setTimeout(() => cb(_products.length), 300)
  },
}