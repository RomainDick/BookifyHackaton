<template>
  <section class="filters">
    <SelectDepart
      v-bind:default="getUserData.department"
      v-on:new-dept="newDept"
    ></SelectDepart>
  </section>
</template>

<script>
// import * as fromTypes from '@/store/types.js';
import SelectDepart from '@/shared/SelectDepart';

export default {
  name: 'Filters',

  components: {
    SelectDepart
  },

	data(){
    return {
    };
  },
  
  computed: {
		getUserInfos() {
			return this.$store.getters.getUserInfos;
    },
    getUserData() {
			return this.$store.getters.getUserData;
    },
	},

  methods:{
    newDept(value){
      console.log(value)
    }
  }
  
}
</script>

<style scoped lang="scss">

@import "../../../assets/stylesheets/variables";

.filters{
  padding: $marge 0;
}
</style>
