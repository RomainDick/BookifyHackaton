<template>
  <a 
    class="button" 
    :href="link"
  >
    {{title}}
  </a>
</template>

<script>
export default {
  name: 'Button',

  props: {
    title : {type:String, default:''},
    link : {type:String, default:''},
  },
}
</script>

<style lang="scss">

.button{
  background-color: #000;
  color:#FFF;
  width: auto;
  padding:5px 20px;
}

</style>
