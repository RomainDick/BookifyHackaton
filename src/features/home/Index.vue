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

      <!-- {{getItems['hydra:member']}} -->
      <ListItems
        :loading = 'getItemsLoading'
        :loaded  = 'getItemsLoaded'
        :items   = "getFirstItems"
      ></ListItems>
      <div class='home__link'>
        <router-link to="/all">
          Voir tous
        </router-link>
      </div>
    </div>

    <div v-if='getUserLogin'>
      <h1 class="home__title">Livres sélectionnés pour vous</h1>
      <ListItems
        :loading = 'getItemsPrefLoading'
        :loaded  = 'getItemsPrefLoaded'
        :items   = "getItemsPref['hydra:member']"
      ></ListItems>
    </div>

  </section>
</template>

<script>
import Banner from '@/shared/Banner';
import ListItems from '@/shared/ListItems';
import Filters from '@/shared/Filters';

import * as fromTypes from '@/store/types.js';

export default {
  name: 'home',

  components: {
    Banner,
    ListItems,
    Filters
  },
  
  computed: {
		getUserLogin() {
			return this.$store.getters.getUserLogin;
		},
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
      return this.getFirstItemsMethods()
    },
    getUserData() {
			return this.$store.getters.getUserData;
    },
    getItemsPref() {
			return this.$store.getters.getItemsPref;
		},
		getItemsPrefLoading() {
			return this.$store.getters.getItemsPrefLoading;
		},
		getItemsPrefLoaded() {
			return this.$store.getters.getItemsPrefLoaded;
    },
  },
  
  mounted() {
    this.$store.dispatch(
      fromTypes.GET_ITEMS_PREF,
      {
        department : this.getUserData.department,
        categories : this.getUserData.categories,
      }
    );
  },

  methods:{
    getFirstItemsMethods(){
      let array = []
      
      if(this.getItems['hydra:member']){
        for (let i = 0; i < 8; i++) {          
          if(this.getItems['hydra:member'][i]){
            array.push(this.getItems['hydra:member'][i]);
          }
        }
      }

      return array;
    }
  }
  
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

  &__link{
    text-align: center;

    a{
      background-color: $summer-green;
      padding:10px 15px;
      margin:0px auto 10px;
      display: inline-block;
      color:$white;
      font-weight: 600;
      text-decoration: none;
      font-size: 14px;
      transition: all 150ms ease-out;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
}
</style>