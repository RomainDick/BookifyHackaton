<template>
  <div class="home">
    
    <Banner
      :title='"Bookify, Achat/Vente de livres d&apos;occasion"'
      :image='"home"'
    ></Banner>
    
  </div>
</template>

<script>
import Banner from '@/shared/Banner';

export default {
  name: 'home',

  components: {
    Banner
  },

}
</script>
