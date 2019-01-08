<template>
  <ul id="item_list">
      <ItemBook
        :name='"test"'
        :description='"test"'
        :image='"test"'
        :price='12'
        :username='"test"'
        :phone_number='"0000000000"'
        :email='"test@test.fr"'
      ></ItemBook>
  </ul>
</template>

<script>
import ItemBook from '@/shared/ItemBook';

export default {
  name: 'Items',

  components: {
    ItemBook
  },

}
</script>
