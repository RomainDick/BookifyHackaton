<template>
  <section class='login'>

    <input 
      type="text" 
      placeholder='login'
      v-model='user.username'
    >
    <input 
      type="text" 
      placeholder='password'
      v-model='user.password'
    >
    <input 
      type="submit"
      value='login'
      v-on:click='loginUser()'
    >

  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';

export default {
  name: 'login',

	data(){
    return {
      user : {
        username: 'test@test.test',
        password: 'azerty'
      }
    };
  },
  
  computed: {

	},

  components: {
  },

  methods:{
    loginUser(){

      this.$store.dispatch(
        fromTypes.LOGIN_USER,
        this.user
      );
    
    },
      
	}

}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/_variables";

.login{

}
</style>