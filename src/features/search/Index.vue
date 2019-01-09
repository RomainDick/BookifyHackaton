<template>
  <section class='search'>
    <div class="search__input">
      <input 
        type="text" 
        placeholder='Rechercher un livre..'
        v-model='keyword'
        v-on:keyup='startSearch()'
      >
    </div>
    <div class="search__result">

    </div>
  </section>
</template>

<script>

export default {
  name: 'search',

	data(){
    return {
      keyword : ''
    };
  },

	computed: {

	},

	mounted() {
	},

	methods:{
    startSearch(){
      if(this.keyword > 3){
        console.log(this.keyword);
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
