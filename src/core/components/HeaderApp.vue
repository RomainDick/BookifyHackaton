<template>
  <header class='HeaderApp'>
    <div class='HeaderApp__content'>

      <img class='HeaderApp__logo' src="@/assets/image/logo.svg" alt="">

      <ul class='HeaderApp__list'>
        <li>
          <router-link class='HeaderApp__link' to="/">Home</router-link>
        </li>
        <li>
          <router-link class='HeaderApp__link' to="/about">About</router-link>
        </li>
        <li>
          <router-link class='HeaderApp__link' to="/items">Mes annonces</router-link>
        </li>
        <li>
          <router-link class='HeaderApp__link' to="/addProduct">addProduct</router-link>
        </li>
        <li>
          <router-link class='HeaderApp__link' to="/account">account</router-link>
        </li>
        <!-- <li>{{getTest}}</li> -->
      </ul>

    </div>
  </header>
</template>

<script>
import * as fromTypes from '@/store/types.js';

export default {
  name: 'HeaderApp',

	computed: {
		getTest() {
			return this.$store.getters.getTest;
		},
	},

	mounted() {
    setTimeout(() => {
      this.logUser()
    }, 2000);
	},

	methods:{
    logUser(){
      this.$store.dispatch(
        fromTypes.UPDATE_TEST,
        true
      );
    },  
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
