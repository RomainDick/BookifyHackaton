<template>
  <header class='HeaderApp'>
    <div class='HeaderApp__content'>

      <router-link to="/">
        <img class='HeaderApp__logo' src="@/assets/image/logo.svg" alt="">
      </router-link>

      <ul class='HeaderApp__list'>

        <li>
          <router-link class='HeaderApp__link' to="/all">Les annonces</router-link>
        </li>
        
        <li v-if='!getUserLogin'>
          <router-link class='HeaderApp__link' to="/login">Se connecter / S'inscrire</router-link>
        </li>
        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/items">Mes annonces</router-link>
        </li>
        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/addProduct">Ajouter une annonce</router-link>
        </li>
        <li v-if='getUserLogin'>
          <router-link class='HeaderApp__link' to="/account">Mon compte</router-link>
        </li>
        <li v-if='getUserLogin'>
          <a class='HeaderApp__link' v-on:click="decoUser()">Déconnexion</a>
        </li>
        
        <li>
          <router-link class='HeaderApp__link' to="/search">
            <img src="@/assets/image/search.svg" alt="">
          </router-link>
        </li>

      </ul>

    </div>
  </header>
</template>

<script>
import * as fromTypes from '@/store/types.js';

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
    decoUser() {
      this.$store.dispatch(
          fromTypes.DECO_USER,
          this.user,
      );
      this.$router.push('login') 
    },
	}
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.HeaderApp{
  background-color: $moss-green;
  height: $height-nav;
  transform: translateX(-15px);
  width: calc(100% + 2*#{$marge});
  z-index: $z-nav;

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

    &:hover, &.router-link-active{
      border-bottom: 2px solid $summer-green;
    }

    img{
      width: 14px;
      transform: scale(1.3);
    }
  }
}
</style>
