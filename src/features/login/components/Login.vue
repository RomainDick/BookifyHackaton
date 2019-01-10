<template>
  <section class='login'>

    <div class="form">
      <label class="label">Email</label>
      <input 
        type="text" 
        placeholder='Email'
        v-model='user.username'
      >
      <label class="error" v-if="errors.username"><br/>{{ errors.username }}</label>
      <label class="label">Mot de passe</label>
      <input 
        type="password" 
        placeholder='Mot de passe'
        v-model='user.password'
      >
      <label class="error" v-if="errors.password"><br/>{{ errors.password }}</label>
      <br/>
      <input 
        type="submit"
        value='Connexion'
        v-on:click='checkForm()'
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
        username: null,
        password: null
      },
      errors : {
        username: null,
        password : null,
        hasError : false,
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

    checkForm(){
      this.errors = [];
      if (!this.user.username) {
        this.errors.username = "Veuillez entre votre email";
        this.errors.hasError = true;
      }
      if (!this.user.password) {
        this.errors.password = "Veuillez entrer votre mot de passe";
        this.errors.hasError = true;
      }
      if(!this.errors.hasError)
        this.loginUser();
    },
	}

}
</script>


<style scoped lang="scss">
@import "../../../assets/stylesheets/variables";
@import "../../../assets/stylesheets/form";

.login{

}

.error{
    color: $red
}
</style>