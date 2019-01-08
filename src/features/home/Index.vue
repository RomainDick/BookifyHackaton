<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    
    <Button
      :title='"ae"'
      :link='"http://google.com"'
    ></Button>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Button from '@/shared/Button';

export default {
  name: 'home',

  components: {
    HelloWorld,
    Button
  },
  
}
</script>
