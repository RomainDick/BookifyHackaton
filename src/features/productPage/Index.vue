<template>
  <section class='productPage'>
    productPage
  </section>
</template>

<script>
// import * as fromTypes from '@/store/types.js';
// import Banner from '@/shared/Banner';
// import ListItems from '@/shared/ListItems';

export default {
  name: 'productPage',

  components: {
  },

	data(){
    return {
      id : 0
    };
  },

	computed: {
	},


	mounted() {
    this.id = this.$route.params.id;
    console.log(this.id)
	},

	methods:{
    // startSearch(){
    //   this.$store.dispatch(
    //     fromTypes.SEARCH,
    //     {
    //       keyword : this.keyword,
    //       token : this.getUserInfos.token
    //     }
    //   );
    // }
	}
}
</script>


<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.productPage{

}
</style>
