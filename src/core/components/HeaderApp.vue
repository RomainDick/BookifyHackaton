<template>
  <header class='HeaderApp'>
    <img class='HeaderApp__logo' src="@/assets/image/logo.svg" alt="">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    {{getTest}}

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
    }, 1000);
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
.HeaderApp{
  display: flex;

  &__logo{
    width: 100px;
  }
}
</style>
