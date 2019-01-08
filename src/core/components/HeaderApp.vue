<template>
  <header class='HeaderApp'>
    <div class='HeaderApp__content'>

      <router-link to="/">
        <img class='HeaderApp__logo' src="@/assets/image/logo.svg" alt="">
      </router-link>

      <ul class='HeaderApp__list'>

        <li v-if='!getUserLogin'>
          <router-link class='HeaderApp__link' to="/login">Login</router-link>
        </li>

        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/items">Mes annonces</router-link>
        </li>
        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/addProduct">addProduct</router-link>
        </li>
        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/account">account</router-link>
        </li>

      </ul>

    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderApp',

	computed: {
		getUserLogin() {
			return this.$store.getters.getUserLogin;
		},
	},

	mounted() {
	},

	methods:{
	}
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.HeaderApp{
  background-color: $moss-green;
  height: $height-nav;

  &__content{
    display: flex;
    max-width: $main-witdh;
    margin:0 auto;
    padding:3px $marge;
    align-items: center;
    justify-content: space-between;
  }

  &__logo{
    width: 100px;
    height: 45px;
  }

  &__list{
    display: flex;
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

    &:hover{
      border-bottom: 2px solid $summer-green;
    }
  }
}
</style>
