<template>
  <div id="app">

    <HeaderApp></HeaderApp>
  
    <main class='main'>
      <router-view/>
    </main>

    <FooterApp></FooterApp>

  </div>
</template>

<script>

import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  name: 'App',

  components: {
    HeaderApp,
    FooterApp
  },

  mounted() {
	},

	methods:{ 
	}
}
</script>


<style lang="scss">

@import "../assets/stylesheets/variables";
@import "../assets/stylesheets/reset";

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
  background-color: $wild-sand;
}

.main{
  flex:1;
  margin:0 auto;
  max-width: $main-witdh;
  padding:$marge;
}

</style>
