<template>
  <section class="formProduct">
    <!-- TODO : Créer un bandeau shared pour tous les titres de page -->
    <h1>Ajouter une annonce</h1>
    <!-- END TODO Créer un bandeau shared pour tous les titre de page -->
      
    <div class="form">
      <div>
        <label class="label">Titre du livre</label>
        <input type="text" name="title" id="title" v-model="title">
        <label class="error" v-if="errors.title"><br/>{{ errors.title }}</label>
      </div>

      <div>
        <label class="label">Genre(s)</label>
        <input type="checkbox" value="thriller" id="thriller" v-model="genre">
        <label for="thriller">Thriller</label>
        <input type="checkbox" value="policier" id="policier" v-model="genre">
        <label for="policier">Policier</label>
        <input type="checkbox" value="romance" id="romance" v-model="genre">
        <label for="romance">Romance</label>
        <input type="checkbox" value="theatre" id="theatre" v-model="genre">
        <label for="theatre">Theatre</label>
        <input type="checkbox" value="autre" id="autre" v-model="genre">
        <label for="autre">Autre</label>
        <label class="error" v-if="errors.genre"><br/><br/>{{ errors.genre }}</label>

      </div>

      <div>
        <label class="label">Résume du livre</label>
        <textarea name="resume" id="resume" v-model="resume"></textarea>
        <label class="error" v-if="errors.resume"><br/>{{ errors.resume }}</label>
      </div>

      <div>
        <label class="label">Prix en €</label>
        <input type="number" name="price" id="price" step="0.01" v-model="price">
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

export default {
  name: 'Form',

  components: {
  },

	data(){
    return {
      errors: {
        title: null,
        genre: null,
        resume: null,
        price: null,
      },
      title: null,
      genre: [],
      resume: null,
      price: null,
    };
  },

  mounted() {
	},

	methods:{ 
    checkForm(){
      this.errors = [];
      if (!this.title)
        this.errors.title = "Veuillez donner un titre à votre annonce.";
      if (!this.genre.length)
        this.errors.genre = "Veuillez selectionner au moins 1 genre.";
      if (!this.resume)
        this.errors.resume = "Veuillez donner le resumé de votre livre";
      if (!this.price)
        this.errors.price = "Veuillez indiquer un prix.";
    },
    addItem(){
      console.log('addItem work')
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
