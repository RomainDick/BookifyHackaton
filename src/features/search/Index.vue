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
      <div class="search__list" v-if='!getSearchLoading'>
        <h1>Il y a {{getSearch['hydra:totalItems']}} resultat(s) </h1>

      </div>
      <div v-else>
        <Loader></Loader>  
      </div>
    </div>

  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';
import Loader from '@/shared/Loader';
import Banner from '@/shared/Banner';

export default {
  name: 'search',

  components: {
    Loader,
    Banner
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
      width: 100%;
      height: 50px;
      border:0;
      border-bottom: 1px solid $summer-green;
      font-size: 20px;
      background-color: transparent;
      appearance: none;
      outline: none;
    }
  }

  &__result{

  }
}
</style>
