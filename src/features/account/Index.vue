<template>
  <div class="account">
        <Banner
      :title='"Mon compte"'
      :image='"account"'
    ></Banner>
    <info/>
  </div>
</template>

<script>
  import Info from "./components/Info.vue";
  import Banner from '@/shared/Banner';

  export default {
    name: "account",

    components: {
      Info,
      Banner
    }
  };
</script>
