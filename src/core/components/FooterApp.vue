<template>
  <footer class='FooterApp'>
    <div class="FooterApp__content">

    </div>
  </footer>
</template>

<script>

export default {
  name: 'HeaderApp',

	mounted() {
	},

	methods:{ 
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.FooterApp{
  background-color: $summer-green;

  &__content{
    max-width: $main-witdh;
    margin:0 auto;
    padding:30px $marge;
  }
}
</style>
