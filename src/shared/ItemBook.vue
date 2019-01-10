<template>

  <router-link :to="id" class="itemBook">
    <img v-bind:src=image class="itemBook__image">
    <div class="itemBook__name">{{name}}</div>
    <div class="itemBook__description">{{description}}</div>
    <div class="itemBook__price">{{price}}€</div>
  </router-link>

</template>

<script>
export default {
  name: 'ItemBook',

  props: {
    id : {type:String, default:''},
    name : {type:String, default:''},
    description : {type:String, default:''},
    image : {type:String, default:''},
    price : {type:Number, default:0}
  },
}
</script>

<style lang="scss">
  @import "../assets/stylesheets/variables";

  .itemBook {
    background-color: $white;
    box-shadow: 0 0 6px rgba($black, 0.1);
    display: block;
    padding-bottom: $marge;
    position: relative;
    width: 100%;
    text-decoration: none;

    &__name {
      font-size: 16px;
      font-weight: 600;
      padding: 10px $marge;
      color:$black;
      min-height: 52px;
    }

    &__description {
      font-size: 14px;
      height:55px;
      margin: 5px $marge 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      color:$black;
    }

    &__price {
      background-color: $summer-green;
      color: $white;
      font-size: 16px;
      font-weight: 500;
      height:50px;
      line-height: 50px;
      position: absolute;
      right: -5px;
      text-align: center;
      top: -5px;
      width: 50px;
    }

    &__image {
      height:200px;
      object-fit: cover;
      width: 100%;
    }
  }
</style>