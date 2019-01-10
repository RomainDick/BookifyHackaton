<template>
  <section class="listItem">

		<ul 
			class = "listItem__list" 
			v-if  = '!loading'
		>
			<li 
				class = "listItem__item"
        v-for = "(item, index) in items" 
				:key  = 'index'
      >
				<ItemBook
					:name        = 'item.title'
					:description = 'item.content'
					:image       = '"http://62.210.144.173:81/"+item.media.url'
					:price       = 'item.price'
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

export default {
  name: 'ListItem',

  components: {
		Loader,
    ItemBook
	},
	
  props: {
    items   : {type:Array, default:null},
    loaded  : {type:Boolean, default:false},
    loading : {type:Boolean, default:false},
	},

	data(){
    return {
    };
  },
  
  computed: {
	},
  
  mounted() {
  },
  
  methods:{

  }
  
}
</script>


<style scoped lang="scss">

@import "../assets/stylesheets/variables";

.listItem{
	padding: $marge 0;
	
  &__list{
		display: flex;
		flex-wrap: wrap;
	}
	
	&__item{
		flex-basis: 23%;
		margin:$marge 1%;
	}
}
</style>
