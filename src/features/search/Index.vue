<template>
  <section class='search'>
    
    <Banner
      :title='"Rechercher un livre"'
      :image='"search"'
    ></Banner>

    <div class="search__input">
      <input 
        type="text" 
        placeholder='Rechercher un livre..'
        v-model='keyword'
        v-on:keyup='startSearch()'
      >
    </div>

    <div class="search__result">
      <h1>
        Il y a 
        <span v-if="getSearch['hydra:totalItems']">{{getSearch['hydra:totalItems']}}</span>
        <span v-else>0</span> 
        resultat(s) 
      </h1>

      <div class="search__list" v-if='!getSearchLoading'>

        <ListItems
          :loading = 'getSearchLoading'
          :loaded  = 'getSearchLoaded'
          :items   = "getSearch['hydra:member']"
        ></ListItems>

      </div>
    </div>

  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';
import Banner from '@/shared/Banner';
import ListItems from '@/shared/ListItems';

export default {
  name: 'search',

  components: {
    Banner,
    ListItems
  },

	data(){
    return {
      keyword : '',
    };
  },

	computed: {
		getUserInfos() {
			return this.$store.getters.getUserInfos;
    },
    getSearch() {
      return this.$store.getters.getSearch;
    },
    getSearchLoading() {
      return this.$store.getters.getSearchLoading;
    },
    getSearchLoaded() {
      return this.$store.getters.getSearchLoaded;
    },
	},


	mounted() {
	},

	methods:{
    startSearch(){
      if(this.keyword.length > 3){
        this.$store.dispatch(
          fromTypes.SEARCH,
          {
            keyword : this.keyword,
            token : this.getUserInfos.token
          }
        );
      }
    }
	}
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.search{
  width: 100%;

  &__input{
    width: 100%;

    input{
      appearance: none;
      background-color: transparent;
      border-bottom: 1px solid $summer-green;
      border:0;
      font-size: 20px;
      height: 50px;
      outline: none;
      width: 100%;
    }
  }

  &__result{

  }
}
</style>
