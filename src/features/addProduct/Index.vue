<template>
  <section class="addProduct">    

    <Banner 
      :title='"Ajouter une annonce"'
      :image='"addProduct"' 
    ></Banner>

    <Form/>
  </section>
</template>

<script>
import Form from './components/Form.vue';
import Banner from '@/shared/Banner';

export default {
  name: 'addProduct',

  components: {
    Form,
    Banner
  },

}
</script>
