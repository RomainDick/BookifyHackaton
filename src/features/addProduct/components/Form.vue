<template>
  <section class="formProduct">
      
    <div class="form">
      <div>
        <label class="label">Titre du livre</label>
        <input type="text" name="title" id="title" v-model="item.title">
        <label class="error" v-if="errors.title"><br/>{{ errors.title }}</label>
      </div>
      <div>
        <label class="label">Genre(s)</label>
        <select v-model="item.category">
          <option v-for='(cat, index) in getCategories["hydra:member"]' :key="index" v-bind:value="cat.id">{{cat.name}}</option>
        </select>
        <label class="error" v-if="errors.category"><br/><br/>{{ errors.category }}</label>
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

      </div> -->

      <div>
        <label class="label">Résume du livre</label>
        <textarea name="content" id="content" v-model="item.content"></textarea>
        <label class="error" v-if="errors.content"><br/>{{ errors.content }}</label>
      </div>

      <div>
        <label class="label">Prix en €</label>
        <input type="number" name="price" id="price" step="1" min="0" v-model.number="item.price">
        <label class="error" v-if="errors.price"><br/>{{ errors.price }}</label>
      </div>

      <div>
        <label class="label">Photo du livre</label>
        <input type="file" name="picture" id="picture" accept="image/bmp,image/gif,image/jpeg,image/png" ref="file" v-on:change="createFile()">
        <label class="error" v-if="errors.media"><br/>{{ errors.media }}</label>
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
        category: null,
        content: null,
        price: null,
        media: null,
      },
      media: {
        data : '',
        name: '',
      },
      item: {
        title: null,
        content: null,
        price: 0,
        user : null,
        media : null,
        category : null,
        
      }
    };
  },

  computed : {
    getUserInfos() {
			return this.$store.getters.getUserInfos;
    },
    getCategories() {
      return this.$store.getters.getCategories;
    },
    getMedia() {
			return this.$store.getters.getMedia;
    },
  },

  mounted() {
    this.$store.dispatch(
        fromTypes.GET_CATEGORIES
      );
	},

	methods:{ 
      
    createProduct(){
      this.item.user = '/users/'+this.getUserInfos.id;
      this.item.category = '/categories/'+ this.item.category;
      console.log(this.item);
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
      if (!this.item.title) {
        this.errors.title = "Veuillez donner un titre à votre annonce.";
        this.errors.hasError = true;
      }
      if (!this.item.category) {
        this.errors.category = "Veuillez selectionner une categorie.";
        this.errors.hasError = true;
      }
      if (!this.item.content) {
        this.errors.content = "Veuillez donner le resumé de votre livre";
        this.errors.hasError = true;
      }
      if (!this.item.price) {
        this.errors.price = "Veuillez indiquer un prix.";
        this.errors.hasError = true;
      }
      if (!this.media.data) {
        this.errors.media = "Veuillez inserer une image.";
        this.errors.hasError = true;
      }
      if(!this.errors.hasError)
        this.createMedia();
    },

    createMedia(){
    this.item.user = '/users/'+this.getUserInfos.id;
    this.item.category = '/categories/'+ this.item.category;
    console.log(this.item);
    console.log(this.mediaIsCreated)
    if(this.mediaIsCreated){
      this.$store.dispatch(
        fromTypes.CREATE_MEDIA,
        {
          media : this.media,
          item : this.item,
          token : this.getUserInfos.token,
          id : this.getUserInfos.id
        }
      );
      this.media = null
      }
      this.mediaIsCreated = false
    },

    createFile(){
      this.mediaIsCreated = true
      let file = this.$refs.file.files[0]
      this.media.name = file.name
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.media.data = reader.result
      }
    }
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
