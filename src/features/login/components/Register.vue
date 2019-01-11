<template>
  <section class='register'>

    <div class="form">
      <label class="label">Email</label>
      <input 
        type="text"
        v-model='user.email'
      >
      <label class="error" v-if="errors.email"><br/>{{ errors.email }}</label>

      <label class="label">Password</label>
      <input 
        type="password"
        v-model='user.plainPassword'
      >
      <label class="error" v-if="errors.password"><br/>{{ errors.password }}</label>
  
      <label class="label">Nom</label>
      <input 
        type="text"
        v-model='user.lastName'
      >
      <label class="error" v-if="errors.lastName"><br/>{{ errors.lastName }}</label>

      <label class="label">Prenom</label>
      <input 
        type="text"
        v-model='user.firstName'
      >
      <label class="error" v-if="errors.firstName"><br/>{{ errors.firstName }}</label>

      <label class="label">Genre</label>
      <select 
        name="" id=""
        v-model='user.gender'
      >
        <option value="F">Femme</option>
        <option value="M">Homme</option>
      </select>

      <label class="label">Téléphone</label>
      <input 
        type="text"
        v-model='user.phone'
      >
      <label class="error" v-if="errors.phone"><br/>{{ errors.phone }}</label>


      <label class="label">Adresse</label>
      <SelectDepart
        v-on:new-dept="newDept"
      ></SelectDepart>
      <label class="error" v-if="errors.department"><br/>{{ errors.department }}</label>
      <input 
        type="text"
        placeholder="Ville"
        v-model='user.city'
      >
      <label class="error" v-if="errors.city"><br/>{{ errors.city }}</label>


      <label class="label">Avatar</label>
      <input 
        type="file"
        ref="file"
        v-on:change="createFile()"
      >

    
      <label class="label">Mes préférences</label>
      <span v-for='(cat, index) in getCategories["hydra:member"]' :key="index">
        <input type="checkbox" :value="'/categories/'+cat.id" :id="cat.name" v-model="user.categories">
        <label :for="cat.name">{{cat.name}}</label>
      </span>
      <label class="error" v-if="errors.categories"><br/><br/>{{ errors.categories }}</label>
      <br/>

      <label class="error" v-if="this.getErrors.register"><br/>Email déjà utilisé</label>
      <label class="error" v-if="this.getErrors.server"><br/>Erreur serveur</label>

      <br/>
      <input 
        type="submit"
        value='Créer mon compte'
        v-on:click='checkForm()'
      >
    </div>
    
  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';
import SelectDepart from '@/shared/SelectDepart';

export default {
  name: 'register',

  components: {
    SelectDepart
  },

	data(){
    return {
      mediaIsCreated : false,
      formDisplay : 'register',
      media: {
        data : '',
        name: '',
      },
      user:{
        email : '',
        lastName : '',
        firstName : '',
        gender : 'M',
        phone : '',
        plainPassword : '',
        media : null,
        categories: [],
        city: '',
        department : '00'
      },
      errors: {
        email: null,
        lastName: null,
        firstName: null,
        phone: null,
        password: null,
        categories: null,
        hasError: null,
        department: null,
        city: null,
      }
    };
  },
  
  computed: {
    getErrors() {
			return this.$store.getters.getErrors;
    },
		getMedia() {
			return this.$store.getters.getMedia;
    },
    getCategories() {
      return this.$store.getters.getCategories;
    },
  },
  
  
  mounted() {
    this.$store.dispatch(
      fromTypes.GET_CATEGORIES
    );
	},

  methods:{
    newDept(value){
      this.user.department = value;
    },

    createMedia(){
      console.log(this.mediaIsCreated)
    if(this.mediaIsCreated){
      this.$store.dispatch(
        fromTypes.CREATE_MEDIA,
        {
          media : this.media,
          user : this.user,
        }
      );
      this.media = null
      } else{
        this.createUser()
      }
      this.mediaIsCreated = false
    },

    createUser(){
      this.$store.dispatch(
        fromTypes.CREATE_USER,
        this.user
      );
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
    },
    
    checkForm(){
      this.errors = [];
      if (!this.user.email) {
        this.errors.email = "Veuillez saisir votre adresse email.";
        this.errors.hasError = true;
      }
      if (!this.user.lastName) {
        this.errors.lastName = "Veuillez saisir votre nom.";
        this.errors.hasError = true;
      }
      if (!this.user.firstName) {
        this.errors.firstName = "Veuillez saisir votre prenom";
        this.errors.hasError = true;
      }
      if (!this.user.phone) {
        this.errors.phone = "Veuillez saisir votre numéro de téléphone.";
        this.errors.hasError = true;
      }
      if (this.user.department == "00") {
        this.errors.department = "Veuillez saisir votre département.";
        this.errors.hasError = true;
      }
      if (!this.user.city) {
        this.errors.city = "Veuillez saisir votre ville.";
        this.errors.hasError = true;
      }
      if (!this.user.plainPassword) {
        this.errors.password = "Veuillez saisir votre mot de passe.";
        this.errors.hasError = true;
      }
      if (!this.user.categories.length) {
        this.errors.categories = "Veuillez sélectionner au moins 1 categorie.";
        this.errors.hasError = true;
      }
      if(!this.errors.hasError)
        this.createMedia();
    },
  }
}
</script>


<style scoped lang="scss">
@import "../../../assets/stylesheets/variables";
@import "../../../assets/stylesheets/form";

.register{

}

.error{
    color: $red
}
</style>