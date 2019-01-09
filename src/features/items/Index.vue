<template>
	<section>

		<ul class="item_list" v-if='!getItemsLoading'>

			<li v-for="(item, index) in getItems['hydra:member']" :key='index'>
				<ItemBook
					:name='item.title'
					:description='item.content'
					:image='"http://62.210.144.173:81/"+item.media.url'
					:price='item.price'
					:username='"test"'
					:phone_number='"0000000000"'
					:email='"test@test.fr"'
				></ItemBook>
			</li>

		</ul>

		<div v-else>
			<Loader></Loader>
		</div>

	</section>
</template>

<script>
import ItemBook from '@/shared/ItemBook';
import Loader from '@/shared/Loader';
import * as fromTypes from '@/store/types.js';

export default {
  name: 'Items',

  components: {
		Loader,
    ItemBook
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
		this.$store.dispatch(
			fromTypes.GET_ITEMS
		);
	},

  methods:{
	}
}
</script>

<style lang="scss">
	.item_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
