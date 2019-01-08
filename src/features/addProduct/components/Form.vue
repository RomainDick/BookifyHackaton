<template>
  <div class="form">
    <h1>Ajouter une annonce</h1>
    <form>
      <div class>
        Titre<br/>
        <input type="text" name="title" id="title">
      </div>
      <div class="sort">
        Genre(s)<br/>
        <input type="checkbox" name="thriller" id="thriller">
        <label for="thriller">Thriller</label>
        <input type="checkbox" name="policier" id="policier">
        <label for="policier">Policier</label>
        <input type="checkbox" name="romance" id="romance">
        <label for="romance">Romance</label>
        <input type="checkbox" name="theatre" id="theatre">
        <label for="theatre">Theatre</label>
      </div>
      <div class>
        Resume du livre<br/>
        <textarea name="resume" id="resume" cols="30" rows="10"></textarea>
      </div>
      <div>
        Prix<br/>
        <input type="number" name="price" id="price" step="0.01">
        €
      </div>
      <div>
        Photo<br/>
        <input type="file" name="photo" id="photo" accept="image/bmp,image/gif,image/jpeg,image/png,image/x-ms-bmp">
      </div>
      <div>
        <button-submit title="Envoyer"/>
      </div>
    </form>
  </div>
</template>

<script>

import ButtonSubmit from '../../../shared/ButtonSubmit';

export default {
  name: 'Form',

  components: {
    ButtonSubmit
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
