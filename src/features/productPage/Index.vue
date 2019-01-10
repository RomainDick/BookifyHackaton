<template>
  <section class='productPage' v-if='getItemLoaded'>

    <Banner
      :title='getItem.title'
      :image='"productPage"'
    ></Banner>

    <div class="productPage__content" v-if='!getItemLoading'>
      <div class="productPage__image">
        <img :src="baseUrl+getItem.media.url" alt="">
        <div class="productPage__price">{{getItem.price}}€</div>
      </div>
      <div class="productPage__infos">
        <div class="productPage__title">{{getItem.category.name}} / {{getItem.title}}</div>
        <div class="productPage__texte">{{getItem.content}}</div>
        <div class="productPage__user">
          <div class="name">
            En vente par {{getItem.user.firstName}} {{getItem.user.lastName}}
            le {{formattedDate}}
          </div>
          <div class="info">
            Email : {{getItem.user.email}}
          </div>
          <div class="info">
            Téléphone : {{getItem.user.phone}}
          </div>
        </div>
        <!-- {{getItem.category}} -->
      </div>
    </div>

    <div v-else>
      <loader></loader>
    </div>

  </section>
</template>

<script>
import Vue from 'vue';
import Banner from '@/shared/Banner';
import Loader from '@/shared/Loader';
import * as fromTypes from '@/store/types.js';
import moment from 'moment'

export default {
  name: 'productPage',

  components: {
    Banner,
    Loader
  },

	data(){
    return {
      id : 0,
      baseUrl : ''
    };
  },

	computed: {
		getItem() {
			return this.$store.getters.getItem;
		},
		getItemLoading() {
			return this.$store.getters.getItemLoading;
		},
		getItemLoaded() {
			return this.$store.getters.getItemLoaded;
    },
    formattedDate(){
       return moment(String(this.getItem.created)).format('MM/DD/YYYY à HH:mm')
    }
	},


	mounted() {
    this.baseUrl = Vue.config.environments.baseURL;
    this.id = this.$route.params.id;
    this.getData(this.id);
	},

	methods:{
    getData(id){
      this.$store.dispatch(
        fromTypes.GET_ITEM,
        id
      );
    }
	}
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.productPage{
  &__content{
    padding:$marge 0;
    display: flex;
  }

  &__image{
    position: relative;
    padding: 0 $marge 0 0;
    img{
      max-width: 300px;
    }
  }

  &__price{
    position: absolute;
    top:-10px;
    left: -10px;
    background-color: $summer-green;
    text-align: center;
    width: 70px;
    height: 70px;
    color:$white;
    font-size: 16px;
    font-weight: 600;
    line-height: 70px;
  }

  &__infos{
    flex:1;
  }
  
  &__title{
    padding:10px 0;
    font-size: 20px;
    font-weight: 600;
  }

  &__texte{
    padding:10px 0;
  }
  
  &__user{
    margin:50px 0 0 0;
    .name{
      font-size: 15px;
      font-weight: 600;
    }

    .info{
      background-color: $summer-green;
      color:$white;
      font-weight: 600;
      padding:10px 20px;
      margin:5px 5px 0 0;
      display: inline-block;
    }
  }
}
</style>
