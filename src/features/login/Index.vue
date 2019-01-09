<template>
  <section class='login'>
    
    <div v-if='formDisplay == "login"'>
      <Login></Login>
      <button v-on:click='changeFormDisplay("register")'>Je n'ai pas de compte</button>
    </div>

    <div v-else>
      <Register></Register>
      <button v-on:click='changeFormDisplay("login")'>J'ai déja un compte</button>
    </div>
    
  </section>
</template>

<script>
import Login from './components/Login';
import Register from './components/Register';

export default {
  name: 'login',

  components: {
    Login,
    Register
  },

	data(){
    return {
      formDisplay : 'register'
    };
  },
  
  computed: {

	},

  methods:{
    changeFormDisplay(string){
      this.formDisplay = string;
    }
	}

}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";
@import "../../assets/stylesheets/form";

.login{

}
</style>