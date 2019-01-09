<template>
  <section class="home">
    
    <Banner
      :title='"Bookify, Achat/Vente de livres d&apos;occasion"'
      :image='"home"'
    ></Banner>

    <Filters>
    </Filters>
    
    <ListItems
      :loading = 'getItemsLoading'
      :loaded  = 'getItemsLoaded'
      :items   = "getItems['hydra:member']"
    ></ListItems>
    
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
  },
  
  mounted() {
		this.$store.dispatch(
			fromTypes.GET_ITEMS
		);
  },
}
</script>
