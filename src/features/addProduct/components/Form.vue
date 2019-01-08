<template>
  <section class="formProduct">
    <!-- TODO : Créer un bandeau shared pour tous les titres de page -->
    <h1>Ajouter une annonce</h1>
    <!-- END TODO Créer un bandeau shared pour tous les titre de page -->
      
    <div class="form">
      <div>
        <label class="label">Titre du livre</label>
        <input type="text" name="title" id="title">
      </div>

      <div>
        <label class="label">Genre(s)</label>
        <input type="checkbox" name="thriller" id="thriller">
        <label for="thriller">Thriller</label>
        <input type="checkbox" name="policier" id="policier">
        <label for="policier">Policier</label>
        <input type="checkbox" name="romance" id="romance">
        <label for="romance">Romance</label>
        <input type="checkbox" name="theatre" id="theatre">
        <label for="theatre">Theatre</label>
      </div>

      <div>
        <label class="label">Résume du livre</label>
        <textarea name="resume" id="resume"></textarea>
      </div>

      <div>
        <label class="label">Prix en €</label>
        <input type="number" name="price" id="price" step="0.01">
      </div>

      <div>
        <label class="label">Photo du livre</label>
        <input type="file" name="photo" id="photo" accept="image/bmp,image/gif,image/jpeg,image/png,image/x-ms-bmp">
      </div>
      
      <div>
        <input type="submit" value="Envoyer" v-on:click='addItem()'>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'Form',

  components: {
  },

  mounted() {
	},

	methods:{ 
    addItem(){
      console.log('addItem work')
    }
	}
}
</script>

<style scoped lang="scss">
  @import "../../../assets/stylesheets/form";

  .formProduct{

  }
</style>
