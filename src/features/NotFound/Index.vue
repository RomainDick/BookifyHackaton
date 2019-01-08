<template>
  <section class='not-found'>
    <h1>404, page doesn't exist.</h1>
    <ul class="quatre-cent-quatre__content">
      <li> <router-link to="/">Page d'accueil</router-link> </li>
      <li> <router-link to="/">Liste produit</router-link> </li>
      <li> <router-link to="/account">Mon compte</router-link> </li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'NotFound',

  components: {
  },

}
</script>

<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.not-found{
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    border-bottom: 5px solid $summer-green;
    color:$summer-green;
    font-size: 50px;
    font-style: italic;
    font-weight: 600;
    padding: 15px 0;
    text-align: center;
  }

  &__content{
    list-style-type: disc;
    padding:50px 0;

    li{
      font-size: 30px;
      padding:10px 0;

      &::before {
        color: $summer-green;
        content: "\2022";
        display: inline-block;
        font-weight: bold; 
        margin-left: -1em; 
        width: 1em;
      }

      a{
        color:$summer-green;
        text-decoration: none;
      }
    }
  }
}
</style>