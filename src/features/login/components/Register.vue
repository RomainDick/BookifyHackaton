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
        ref="file"
        v-on:change="createFile()"
      >

      <label class="label">Password</label>
      <input 
        type="password"
        v-model='user.plainPassword'
      >

      <input 
        type="submit"
        value='login'
        v-on:click='createMedia()'
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
        media : null
      }
    };
  },
  
  computed: {
		getMedia() {
			return this.$store.getters.getMedia;
    },
	},

  methods:{
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