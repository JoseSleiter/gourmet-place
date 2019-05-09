<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
   {{onHashChange()}}
      <a class="navbar-brand" href="#">
          <img src="@/assets/images.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
          GourmetPlace
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item " :class="{ active: visibility == 'home' }">
            <a class="nav-link" href="https://linkedin.com/in/jose-sleiter-rios-905447165/">Linkedin</a>
          </li>      
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data(){
      return{
        publicPath: process.env.BASE_URL,
        visibility: ''
      }
    },

    methods:{
      onHashChange () {
        var visibility = window.location.hash.replace(/#\/?/, '')
        this.visibility = visibility
        window.addEventListener('hashchange', this.onHashChange)
        console.log(visibility)
      }
    }

}
</script>

<style scope>

    .active > a{
      border-bottom: 2px solid #48cfad;
      margin-bottom: 2px;
      padding: 0;
    }
    .navbar-light .navbar-brand {
      color:#48cfad !important;
    }
</style>