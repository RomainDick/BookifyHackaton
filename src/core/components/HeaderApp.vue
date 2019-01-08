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
  padding: 5px 0;
  background-color: $moss-green;

  &__content{
    display: flex;
    max-width: $main-witdh;
    margin:0 auto;
    padding:0 $marge;
    align-items: center;
    justify-content: space-between;
  }

  &__logo{
    width: 100px;
    height: 40px;
  }

  &__list{
    display: flex;
    li{
      padding: 0 10px;
    }
  }

  &__link{
    color:$black;
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
