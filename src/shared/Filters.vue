<template>
  <section class="filters">

    <SelectDepart
      v-bind:default="getUserData.department"
      v-on:new-dept="newDept"
    ></SelectDepart>

    <SelectCategories
      v-on:new-cat="newCat"
    ></SelectCategories>

  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';
import SelectDepart from '@/shared/SelectDepart';
import SelectCategories from '@/shared/SelectCategories';

export default {
  name: 'Filters',

  components: {
    SelectDepart,
    SelectCategories
  },

	data(){
    return {
      payload : {
        department : '00',
        category : 0
      }
    };
  },
  
  computed: {
    getUserData() {
			return this.$store.getters.getUserData;
    },
  },
  
  mounted() {
    this.payload.department = this.getUserData.department
    this.getItems(this.payload);
  },

  methods:{
    newDept(value){
      this.payload.department = value;
      this.getItems(this.payload);
    },

    newCat(value){
      this.payload.category = value;
      this.getItems(this.payload);
    },

    getItems(payload){
      this.$store.dispatch(
        fromTypes.GET_ITEMS,
        payload
      );
    }
  }
  
}
</script>

<style scoped lang="scss">

@import "../assets/stylesheets/variables";

.filters{
  padding: $marge 0;
  display: flex;
  justify-content: space-between;
}
</style>
