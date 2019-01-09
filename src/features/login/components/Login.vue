<template>
  <section class='login'>

    <div class="form">
      <label class="label">Email</label>
      <input 
        type="text" 
        placeholder='login'
        v-model='user.username'
      >
      <label class="label">Password</label>
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
    </div>
    
  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';

export default {
  name: 'login',

	data(){
    return {
      user : {
        username: 'maxime@test.com',
        password: 'azerty'
      }
    };
  },
  
  computed: {

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
@import "../../../assets/stylesheets/variables";
@import "../../../assets/stylesheets/form";

.login{

}
</style>