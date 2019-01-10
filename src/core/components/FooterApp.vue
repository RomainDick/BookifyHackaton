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

<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.FooterApp{
  background-color: $summer-green;
  width: calc(100% + 2*#{$marge});
  transform: translateX(-15px);

  &__content{
    max-width: $main-witdh;
    margin:0 auto;
    padding:30px $marge;
  }
}
</style>
