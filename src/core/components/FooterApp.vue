<template>
  <footer class='FooterApp'>
    <div class="FooterApp__content">
        <router-link class="FooterApp__link" to="/mentions_legales">Mentions légales</router-link>
        <p class="FooterApp__copyright">© Copyright 2019 Bookify</p>
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
    padding:15px $marge;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link{
    border-bottom: 2px solid transparent;
    color:$black;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 150ms ease-out;
    padding: 2px 3px;
    margin:3px 7px;
  }

  &__copyright {
    border-bottom: 2px solid transparent;
    color:$black;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 150ms ease-out;
  }
}
</style>
