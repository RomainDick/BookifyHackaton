<template>
  <section class='all'>

    <Banner
      :title='"Toutes les annonces"'
      :image='"all"'
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
import Filters from '@/shared/Filters';

export default {
  name: 'login',

  components: {
    Banner,
    ListItems,
    Filters
  },

	data(){
    return {
    };
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
  },

  methods:{
  }
  

}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.all{

}
</style>