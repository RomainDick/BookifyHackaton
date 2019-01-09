<template>
  <h1 
    class="banner" 
  >
    {{title}}
  </h1>
</template>

<script>
export default {
  name: 'Banner',

  props: {
    title : {type:String, default:''},
  },
}
</script>

<style lang="scss">
 @import "../assets/stylesheets/variables";
.banner{
  background:$white;
  border-radius:2px;
  margin:$marge auto;
  max-width:$form-witdh;
  padding:$marge;
}

</style>
