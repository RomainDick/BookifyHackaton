<template>
  <section class="listItem">
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ListItem',

  components: {
  },

	data(){
    return {
    };
  },
  
  computed: {

	},

  methods:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../../../assets/stylesheets/variables";

.listItem{
  padding: $marge 0;
}
</style>
