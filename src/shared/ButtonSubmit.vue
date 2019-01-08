<template>
  <button type="submit"
  >
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'ButtonSubmit',

  props: {
    title : {type:String, default:''},
  },
}
</script>

<style lang="scss">

button{
  background-color: #000;
  color:#FFF;
  width: auto;
  padding:5px 20px;
}

</style>
