<template>
  <section class='register'>

    <div class="form">
      <label class="label">Email</label>
      <input 
        type="text"
        v-model='user.email'
      >

      <label class="label">Nom</label>
      <input 
        type="text"
        v-model='user.lastName'
      >

      <label class="label">Prenom</label>
      <input 
        type="text"
        v-model='user.firstName'
      >

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

      <label class="label">Avatar</label>
      <input 
        type="file"
      >

      <label class="label">Password</label>
      <input 
        type="password"
        v-model='user.plainPassword'
      >

      <input 
        type="submit"
        value='login'
        v-on:click='createUser()'
      >
    </div>
    
  </section>
</template>

<script>
import * as fromTypes from '@/store/types.js';

export default {
  name: 'register',

	data(){
    return {
      formDisplay : 'register',
      user:{
        email : '',
        lastName : '',
        firstName : '',
        gender : 'F',
        phone : '',
        plainPassword : '',
      }
    };
  },
  
  computed: {

	},

  methods:{
    createUser(){
      console.log(this.user)

      this.$store.dispatch(
        fromTypes.CREATE_USER,
        this.user
      );
    }
	}

}
</script>


<style scoped lang="scss">
@import "../../../assets/stylesheets/variables";
@import "../../../assets/stylesheets/form";

.register{

}
</style>