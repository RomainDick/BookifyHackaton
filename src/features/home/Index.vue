<template>
  <div class="home">
    
    <Banner
      :title='"Bookify, Achat/Vente de livres d&apos;occasion"'
      :image='"home"'
    ></Banner>

    <Filters>
    </Filters>
    
    <ListItems>
    </ListItems>
  </div>
</template>

<script>
import Banner from '@/shared/Banner';
import ListItems from './components/ListItems';
import Filters from './components/Filters';

export default {
  name: 'home',

  components: {
    Banner,
    ListItems,
    Filters
  },

}
</script>
