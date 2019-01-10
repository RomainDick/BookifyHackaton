<template>
  <section class="formProduct">
      
    <div class="form">
      <div>
        <label class="label">Titre du livre</label>
        <input type="text" name="title" id="title" v-model="item.title">
        <label class="error" v-if="errors.title"><br/>{{ errors.title }}</label>
      </div>
      
  <!--    <div>
        <label class="label">Genre(s)</label>
        <input type="checkbox" value="thriller" id="thriller" v-model="item.genre">
        <label for="thriller">Thriller</label>
        <input type="checkbox" value="policier" id="policier" v-model="item.genre">
        <label for="policier">Policier</label>
        <input type="checkbox" value="romance" id="romance" v-model="item.genre">
        <label for="romance">Romance</label>
        <input type="checkbox" value="theatre" id="theatre" v-model="item.genre">
        <label for="theatre">Theatre</label>
        <input type="checkbox" value="autre" id="autre" v-model="item.genre">
        <label for="autre">Autre</label>
        <label class="error" v-if="errors.genre"><br/><br/>{{ errors.genre }}</label>

      </div> -->

      <div>
        <label class="label">Résume du livre</label>
        <textarea name="content" id="content" v-model="item.content"></textarea>
        <label class="error" v-if="errors.content"><br/>{{ errors.content }}</label>
      </div>

      <div>
        <label class="label">Prix en €</label>
        <input type="number" name="price" id="price" step="1" v-model.number="item.price">
        <label class="error" v-if="errors.price"><br/>{{ errors.price }}</label>
      </div>

      <div>
        <label class="label">Photo du livre</label>
        <input type="file" name="picture" id="picture" accept="image/bmp,image/gif,image/jpeg,image/png,image/x-ms-bmp">
      </div>
      
      <div>
        <input type="submit" value="Envoyer" v-on:click='checkForm()'>
      </div>
    </div>
  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';

export default {
  name: 'Form',

  components: {
  },

	data(){
    return {
      errors: {
        title: null,
        genre: null,
        content: null,
        price: null,
      },
      item: {
        title: null,
      //  genre: [],
        content: null,
        price: 0,
        user : null,
        media : '/media/21',
        category : '/categories/1'
        
      }
    };
  },

  computed : {
    getUserInfos() {
			return this.$store.getters.getUserInfos;
    },
  },

  mounted() {
	},

	methods:{ 
      
    createProduct(){
      console.log(this.getUserInfos)
      this.item.user = '/users/'+this.getUserInfos.id;
      this.$store.dispatch(
        fromTypes.CREATE_PRODUCT,
        {
          item : this.item,
          token : this.getUserInfos.token,
          id : this.getUserInfos.id
        }
      );
    },

    checkForm(){
      this.errors = [];
      if (!this.item.title)
        this.errors.title = "Veuillez donner un titre à votre annonce.";
   //   if (!this.item.genre.length)
     //   this.errors.genre = "Veuillez selectionner au moins 1 genre.";
      if (!this.item.content)
        this.errors.content = "Veuillez donner le resumé de votre livre";
      if (!this.item.price)
        this.errors.price = "Veuillez indiquer un prix.";
      if(!this.errors.length)
        this.createProduct();
    },
	}
}
</script>

<style scoped lang="scss">
  @import "../../../assets/stylesheets/form";
  @import "../../../assets/stylesheets/variables";


  .formProduct{

  }
  .error{
    color: $red
  }
</style>
