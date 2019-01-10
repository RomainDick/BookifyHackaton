<template>
  <section class='legale'>
    <h1 class="legale__mainTitle">
        Mentions légales
    </h1>
    <h2 class="legale__subTitle">
        Editeur
    </h2>
    <p class="legale__other">
        Bookify SAS, RCS Lille Métropole
    </p>
    <p class="legale__other">
        Tél : 06 45 20 02 62 (appel non surtaxé).
    </p>
    <p class="legale__other">
        email : <u>romain.dick@estiam.com</u>
    </p>
    <h2 class="legale__subTitle">
        Directeurs de la publication
    </h2>
    <p class="legale__other">
        Romain Dick,
        Valentin Brassart,
        Maxime Josien,
        Maxime Jacquet,
        Jordan Delplanque
    </p>
    <h2 class="legale__subTitle">
        Création et Hébergement
    </h2>
    <p class="legale__other">
        104 rue Nationale
    </p>
    <p class="legale__other">
        59800 Lille
    </p>
    <p class="legale__other">
        France
    </p>
    <h2 class="legale__subTitle">
        Propriété Intellectuelle
    </h2>
    <p class="legale__other">
        L'intégralité de ce site est protégée par les législations françaises et internationales relatives à la propriété intellectuelle. Tous les droits de reproduction sont réservés. L'ensemble des textes composant les pages du site ne peut, conformément à l'article L122-4 du code de la propriété intellectuelle, faire l'objet d'une quelconque représentation ou reproduction, intégrale ou partielle, sur quelque support que ce soit, sans l'autorisation expresse et préalable de Bookify.
    </p>
  </section>
</template>
<script>

export default {
  name: 'Legal',

  components: {
  },

}
</script>

<style scoped lang="scss">
@import "../../assets/stylesheets/variables";

.legale {
    &__mainTitle {
        color: $summer-green;
        margin: 30px 0;
        font-size: 2.5rem;
        text-align: center;
    }

    &__subTitle {
        text-align: left;
        margin: 20px 0 0;
        line-height: 1.75rem;
        font-size: 1.375rem;
        font-weight: 400;
    }

    &__other {
        font-weight: 300;
    }
}

</style>