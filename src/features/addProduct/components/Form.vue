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
        <input type="checkbox" name="thriller" id="thriller" v-model="thriller">
        <label for="thriller">Thriller</label>
        <input type="checkbox" name="policier" id="policier" v-model="policier">
        <label for="policier">Policier</label>
        <input type="checkbox" name="romance" id="romance" v-model="romance">
        <label for="romance">Romance</label>
        <input type="checkbox" name="theatre" id="theatre" v-model="theatre">
        <label for="theatre">Theatre</label>
        <input type="checkbox" name="autre" id="autre" v-model="autre">
        <label for="theatre">Autre</label>
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
      thriller: null,
      policier: null,
      romance: null,
      theatre: null,
      autre: null,
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
      if (!this.thriller && !this.policier && !this.romance && !this.theatre && !this.autre)
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
