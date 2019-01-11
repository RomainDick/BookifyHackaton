<template>
  <section class='login'>
    <Banner
      :title='"Connectez-vous pour vendre vos livres"'
      :image='"login"'
    ></Banner>

    <div v-if='formDisplay == "login"'>
      <Login v-on:changeFormDisplay="formDisplay = $event"></Login>
    </div>

    <div v-else>
      <Register v-on:changeFormDisplay="formDisplay = $event"></Register>
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
      formDisplay : 'login'
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
.button{
  text-align: center;
}
button{
    background: $moss-green;
    border-radius: 0px;
    border: none;
    color: $black;
    cursor: pointer;
    font-size: 14px;
    margin: 10px 0 0 0;
    padding: 10px 20px;
    transition: all 150ms ease-out;
}
</style>