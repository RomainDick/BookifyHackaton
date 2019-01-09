<template>
  <section class='login'>
    <Banner
      :title='"Connectez-vous pour vendre vos livres"'
      :image='"login"'
    ></Banner>

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
import Banner from '@/shared/Banner';

export default {
  name: 'login',

  components: {
    Login,
    Register,
    Banner
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