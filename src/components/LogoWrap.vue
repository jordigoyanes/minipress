<template>
    <div class="container logo-wrap">
        <div class="row pt-5">
          <div class="col-12 text-center">
            <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="true" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
            <h1 class="site-logo">
              <router-link tag="a" to="/">{{title}}</router-link>
              </h1>
          </div>
        </div>
      </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'minipress'
    }
  }
}
</script>