<template>
  <section class="home">
    
    <Banner
      :title='"Bookify, Achat/Vente de livres d&apos;occasions"'
      :image='"home"'
    ></Banner>

    <Filters>
    </Filters>
    
    <div>
      <h1 class="home__title">Les dernières annonces</h1>
      <ListItems
        :loading = 'getItemsLoading'
        :loaded  = 'getItemsLoaded'
        :items   = "getFirstItems"
      ></ListItems>
      <router-link class='home__link' to="/all">
        Voir tous
      </router-link>
    </div>

    <div>
      <h1 class="home__title">Livre sélectionnés pour vous</h1>
      <ListItems
        :loading = 'getItemsLoading'
        :loaded  = 'getItemsLoaded'
        :items   = "getItems['hydra:member']"
      ></ListItems>
    </div>
    
  </section>
</template>

<script>
import Banner from '@/shared/Banner';
import ListItems from '@/shared/ListItems';
import Filters from './components/Filters';

import * as fromTypes from '@/store/types.js';

export default {
  name: 'home',

  components: {
    Banner,
    ListItems,
    Filters
  },
  
  computed: {
		getItems() {
			return this.$store.getters.getItems;
		},
		getItemsLoading() {
			return this.$store.getters.getItemsLoading;
		},
		getItemsLoaded() {
			return this.$store.getters.getItemsLoaded;
    },
    getFirstItems(){
      return [
        this.getItems['hydra:member'][0],
        this.getItems['hydra:member'][1],
        this.getItems['hydra:member'][2],
        this.getItems['hydra:member'][3]
      ]
    }
  },
  
  mounted() {
		this.$store.dispatch(
			fromTypes.GET_ITEMS
		);
  },
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.home{
  &__title{
    border-bottom: 2px solid $summer-green;
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    padding:20px 0 0;
  }
}
</style>