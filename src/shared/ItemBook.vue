<template>
  <div class="itemBook">
    <img v-bind:src=image class="itemBook__image">
    <p class="itemBook__name">{{name}}</p>
    <p class="itemBook__description">{{description}}</p>
    <p class="itemBook__price">{{price}}€</p>
  </div>
</template>

<script>
export default {
  name: 'ItemBook',

  props: {
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
    width: 100%;
    position: relative;
    padding-bottom: $marge;

    &__name {
      font-size: 16px;
      padding: 10px $marge;
      font-weight: 600;
    }

    &__description {
      height:55px;
      margin: 5px $marge 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }

    &__price {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: $summer-green;
      color: $white;
      font-size: 16px;
      font-weight: 500;
      height:50px;
      width: 50px;
      text-align: center;
      line-height: 50px;
    }

    &__image {
      height:200px;
      object-fit: cover;
      width: 100%;
    }
  }
</style>