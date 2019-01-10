<template>
  <div id="app">

    <HeaderApp></HeaderApp>
  
    <main class='main'>
      <transition name="fade">
        <router-view></router-view>
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(- 50px);
  position: absolute;
  z-index: -1;
}

#app {
  background-color: $wild-sand;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.main{
  flex:1;
  margin:0 auto;
  max-width: $main-witdh;
  padding:$marge;
  position: relative;
  width: 100%;
}
</style>
