<template>
  <div class="account">
    <img alt="Vue logo" src="@/assets/image/logo.svg">


    <info/>
  </div>
</template>

<script>
  import Info from "./components/Info.vue";

  export default {
    name: "account",

    components: {
      Info
    }
  };
</script>
