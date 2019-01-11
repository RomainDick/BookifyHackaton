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
      <label class="error" v-if="this.getErrors.login"><br/>Email / Mot de passe incorrect</label>
      <label class="error" v-if="this.getErrors.server"><br/>Erreur serveur</label>

      <br/>
      <div class="button">
        <input 
          type="submit"
          value='Connexion'
          v-on:click='checkForm()'
        >
        {{ }}
        <button v-on:click="$emit('changeFormDisplay','register')">Je n'ai pas de compte</button>
      </div>
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
    getErrors() {
			return this.$store.getters.getErrors;
    },
	},

  methods:{
    loginUser(){
      this.$store.dispatch(
        fromTypes.LOGIN_USER,
        this.user,
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

.button{
  text-align: center;
}

.error{
    color: $red
}
button{
    background: $moss-green;
    border-radius: 0px;
    border: none;
    color: $black;
    cursor: pointer;
    font-size: 14px;
    margin: 10px 10px 0 0;
    padding: 10px 20px;
    transition: all 150ms ease-out;
}
</style>