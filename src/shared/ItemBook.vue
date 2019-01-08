<template>
  <div>
    <p>{{name}}</p>
    <p>{{description}}</p>
    <p>{{image}}</p>
    <p>{{price}}</p>
    <p>{{username}}</p>
    <p>{{phone_number}}</p>
    <p>{{email}}</p>
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

</style>