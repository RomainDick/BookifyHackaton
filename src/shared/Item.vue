<template>
  <a 
    class="item" 
    :href="link"
  >
    {{title}}
  </a>
</template>

<script>
export default {
  name: 'Item',

  props: {
    title : {type:String, default:''},
    link : {type:String, default:''},
  },
}
</script>

<style lang="scss">

</style>