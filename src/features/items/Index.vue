<template>
	<section>

    <Banner
      :title='"Mes annonces"'
      :image='"mesAnnonces"'
    ></Banner>

		<ListItems
      :loading = 'getMyItemsLoading'
      :loaded  = 'getMyItemsLoaded'
      :items   = "getMyItems['hydra:member']"
    ></ListItems>

	</section>
</template>

<script>
import * as fromTypes from '@/store/types.js';
import ListItems from '@/shared/ListItems';
import Banner from '@/shared/Banner';

export default {
  name: 'Items',

  components: {
		ListItems,
		Banner
  },

	data(){
    return {
    };
  },
  
  computed: {
		getMyItems() {
			return this.$store.getters.getMyItems;
		},
		getMyItemsLoading() {
			return this.$store.getters.getMyItemsLoading;
		},
		getMyItemsLoaded() {
			return this.$store.getters.getMyItemsLoaded;
		},
		getUserInfos() {
			return this.$store.getters.getUserInfos;
		},
	},
	
	mounted() {
		this.$store.dispatch(
			fromTypes.GET_MY_ITEMS,
			this.getUserInfos.id 
		);
	},

  methods:{
	}
}
</script>

<style scoped lang="scss">
	.item_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
