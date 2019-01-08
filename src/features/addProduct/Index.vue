<template>
  <div class="addProduct">    
    <Button
      :title='"Enregistrer"'
      :link='"http://google.com"'
    ></Button>

  </div>
</template>

<script>
import Button from '../../shared/Button';

export default {
  name: 'addProduct',

  components: {
    Button
  },

}
</script>
