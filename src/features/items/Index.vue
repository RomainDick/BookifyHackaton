<template>
  <ul id="example"><!--
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>-->
</ul>
</template>

<script>
import Items from '../../shared/Item';

export default {
  name: 'item',

  components: {
    Items
  },

}
</script>
