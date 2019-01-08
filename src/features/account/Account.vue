<template>
  <div class="account">
    <img alt="Vue logo" src="../../assets/logo.png">

    <Button :title='"ae"'
     :link='"http://google.com"'></Button>

    <Data msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Data from "./components/Data.vue";
  import Button from "../../shared/Button";

  export default {
    name: "account",

    components: {
      Data,
      Button
    }
  };
</script>
