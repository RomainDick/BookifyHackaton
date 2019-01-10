<template>

  <section class='banner'>

    <img v-if='image == "home"' src="../assets/background/home.jpg" alt="">
    <img v-if='image == "login"' src="../assets/background/login.jpg" alt="">
    <img v-if='image == "search"' src="../assets/background/search.jpg" alt="">
    <img v-if='image == "addProduct"' src="../assets/background/addProduct.jpg" alt="">
    <img v-if='image == "productPage"' src="../assets/background/productPage.jpg" alt="">
    <img v-if='image == "mesAnnonces"' src="../assets/background/mesAnnonces.jpg" alt="">
    <img v-if='image == "all"' src="../assets/background/all.jpg" alt="">
    
    <h1 class="banner__title" v-html='title'>
    </h1>
    
  </section>

</template>

<script>
export default {
  name: 'Banner',

  props: {
    title : {type:String, default:''},
    image : {type:String, default:''},
  },
}
</script>

<style lang="scss">
 @import "../assets/stylesheets/variables";

.banner{
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  min-height: 250px;
  position: relative;
  width: 100%;
  
  &::after{
    content:'';
    z-index: 1;
    background-color : rgba($moss-green, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  img{
    position: absolute; 
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  &__title{
    position: relative;
    z-index: 2;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color:$white;
  }
}

</style>
