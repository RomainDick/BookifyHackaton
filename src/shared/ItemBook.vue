<template>
  <div class="book">
    <img v-bind:src=image class="image">
    <p class="name">{{name}}</p>
    <p class="description">{{description}}</p>
    <p class="price">{{price}}€</p>
  </div>
</template>

<script>
export default {
  name: 'ItemBook',

  props: {
    name : {type:String, default:''},
    description : {type:String, default:''},
    image : {type:String, default:''},
    price : {type:Number, default:0},
    username : {type:String, default:''},
    phone_number : {type:String, default:''},
    email : {type:String, default:''}
  },
}
</script>

<style lang="scss">
  @import "../assets/stylesheets/variables";

  .book {
    display:flex;
    flex-direction: column;
    margin-top: $marge;
    flex-basis: 15%;
    height: 300px;
    min-width: 200px;
    background-color: white;
    border: 1px solid #d4d1d1;
    font-size: .875rem;
    font-weight: 300;
  }

  .name {
    margin-top: 10px;
    text-align: center;
    font-size: .875rem;
    line-height: 1.286rem;
    height:30px;
  }

  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    height:30px;
    margin-left: $marge;
    margin-right:$marge;
  }

  .price {
    text-align: left;
    margin-left: $marge;
    font-size: 1.275rem;
    color: #2d7e2a;
    font-weight: 500;
    height:30px;
  }

  .image {
    width: 100%;
    height:200px;
    object-fit: cover;
  }
</style>