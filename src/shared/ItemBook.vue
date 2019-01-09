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
    width: 100%;

    &__name {
      font-size: .875rem;
      height:30px;
      line-height: 1.286rem;
      margin-top: 10px;
      text-align: center;
    }

    &__description {
      height:30px;
      margin-left: $marge;
      margin-right:$marge;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__price {
      color: #2d7e2a;
      font-size: 1.275rem;
      font-weight: 500;
      height:30px;
      margin-left: $marge;
      text-align: left;
    }

    &__image {
      height:200px;
      object-fit: cover;
      width: 100%;
    }
  }
</style>