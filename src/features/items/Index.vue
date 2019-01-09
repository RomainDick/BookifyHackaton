<template>
  <ul class="item_list">
			{{getItems}}
			{{getItemsLoading}}
			{{getItemsLoaded}}
			
      <ItemBook
        :name='"50 Nuances de grey"'
        :description='"Du sexe et du sexe"'
        :image='"https://www.livredepoche.com/sites/default/files/styles/manual_crop_269_435/public/images/livres/couv/9782253020523-T.jpg?itok=9Dy7iwm4"'
        :price='12'
        :username='"test"'
        :phone_number='"0000000000"'
        :email='"test@test.fr"'
      ></ItemBook>
  </ul>
</template>

<script>
import ItemBook from '@/shared/ItemBook';
import * as fromTypes from '@/store/types.js';

export default {
  name: 'Items',

  components: {
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
