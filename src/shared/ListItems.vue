<template>
  <section class="listItem">

		<div v-if='!loading && items'>
			<ul 
				v-if  = 'items.length > 0'
				name  = "list" 
				tag   = "ul"
				class = "listItem__list"
			>
				<li 
					class = "listItem__item"
					v-for = "(item, index) in items" 
					:key  = 'index + 1'
				>
					<ItemBook
						:id          = 'item["@id"]'
						:name        = 'item.title'
						:description = 'item.content'
						:image       = '"http://62.210.144.173:81/"+item.media.url'
						:price       = 'item.price'
					></ItemBook>
				</li>
			</ul>
		<div v-else class="listItem__none">
			Aucun resultats
		</div>
	</div>
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

	&__none{
		font-size: 30px;
		font-weight: 600;
		color:$black;
		opacity: 0.2;
		text-align: center;
		padding:30px 0;
	}
}
</style>
