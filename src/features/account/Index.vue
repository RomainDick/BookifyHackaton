<template>
  <div class="account">
    <img alt="Vue logo" src="../../assets/logo.png">

    <Button :title='"ae"'
     :link='"http://google.com"'></Button>

    <Info msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Info from "./components/Info.vue";
  import Button from "../../shared/Button";

  export default {
    name: "account",

    components: {
      Info,
      Button
    }
  };
</script>
