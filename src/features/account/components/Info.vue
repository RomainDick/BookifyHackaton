<template>
  <div class="hello">
    <h1>Informations personnelles</h1>
    <p>{{ msg }}</p>
    <h3>Informations personnelles</h3>
    <ul>
      <li>nom</li>
      <li>prenom</li>
      <li>date de naissance</li>
      <li>adresse</li>
      <li>avatar</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "info",
    props: {
      msg: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
