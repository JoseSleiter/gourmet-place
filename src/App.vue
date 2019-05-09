<template>
  <div id="app">
    <NavBar/>
    <ProductList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    ProductList,
    NavBar
  }
}
</script>
// rgb(98, 206, 182)

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
