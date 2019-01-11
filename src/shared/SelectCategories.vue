<template>

  <select class='SelectCategories' v-on:change='changeValue()' v-model='cat'>
          <!-- <span >
        <input type="checkbox" :value="'/categories/'+cat.id" :id="cat.name" v-model="user.categories">
        <label :for="cat.name">{{cat.name}}</label>
      </span> -->

    <option value="0">Selectionner une catégorie</option>
    <option :value="cat.id" v-for='(cat, index) in getCategories["hydra:member"]' :key="index">
      {{cat.name}}
    </option>
  </select>

</template>

<script>

import * as fromTypes from '@/store/types.js';

export default {
  name: 'SelectCategories',

  data(){
    return {
      cat : 0,
    };
  },
  
  computed: {
    getCategories() {
      return this.$store.getters.getCategories;
    },
  },

  mounted() {
    this.$store.dispatch(
      fromTypes.GET_CATEGORIES
    );
  },

  methods:{
    changeValue(){
      this.$emit('new-cat', this.cat)
    }
  }

}
</script>

<style lang="scss">
 @import "../assets/stylesheets/variables";

.SelectCategories{
  -moz-box-sizing: border-box;
  -webkit-appearance: none;
  -webkit-box-sizing: border-box;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $summer-green;
  box-sizing: border-box;
  display: block;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  margin: 2px 0 5px 0;
  outline: none;
  padding: 0;
  width: 300px;
}

</style>
