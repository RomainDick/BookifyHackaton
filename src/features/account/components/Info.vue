<template>
<main >

  <div class="card">

    <img class="avatar" :src="this.getPicture">
    <img class="gender" :src="this.getGender" >
    <div class="infos">
      <div class="name capitalize">
        {{ this.getUserData.firstName }}  {{ this.getUserData.lastName }}
      </div>
      <div class="email">
        <i>{{ this.getUserData.email }}</i>
      </div>
      <div class="departmentCity">
        <i>{{ this.getUserData.department }} / {{ this.getUserData.city }}</i>
      </div>
      <div class="phone">
        <i>{{ this.getUserData.phone }}</i>
      </div>
       <div class="categories">
        <i 
          v-for="(categorie, index) in this.getUserData.categories" 
          v-bind:key="index"
        >
          {{ categorie.name }}
          <br>
        </i>
      </div>
    </div>
  </div>

</main>
</template>

<script>
import Vue from 'vue';
import male from "@/assets/image/male.svg";
import female from "@/assets/image/female.svg";

 export default {
    name: "info",
    props: {
      msg: String
    },

    data() {
      return {
        picture: 'https://image.flaticon.com/icons/svg/149/149992.svg',
        genderMale:male,
        genderFemale:female,
      }
    },

    methods: {
      setMedia(){
        this.picture = Vue.config.environments.baseURL + this.getUserData.media.url
      }
    },

    computed: {
      getUserInfos() {
        return this.$store.getters.getUserInfos;
      },
      getUserData() {
        return this.$store.getters.getUserData;
      },
      getGender(){
        if(this.getUserData.gender == 'M'){
          return this.genderMale
        }
        else{
          return this.genderFemale
        }
      },
      getPicture(){
        if(this.getUserData.media != null){
          this.setMedia()
          return this.picture
        } else {
          return this.picture
        }
      },
    },

    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$global_gap: 10px;
$shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


body {

  main {
    height: 100%;
    width: 100%;

    .card {

      display: flex;

      padding: $global_gap;
      border-radius: 5px;
      box-shadow: $shadow;
      background: rgba(255, 255, 255, .8);

      .avatar {
        width: 150px;
        height: 150px;
        margin-right: $global_gap;
        border-radius: 50%;
      }

      .gender {
        width: 40px;
        height: 25px;
        margin-right: $global_gap;
        border-radius: 50%;
      }

      .infos {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        text-align: center;

        div {

          &:not(:last-child) {
            margin-bottom: $global_gap;
          }

          &.capitalize {
            text-transform: capitalize;
          }

          &.name {
            font-size: 150%;
            font-weight: bold;
          }

          i {
               font-size: 110%;
          }
          image{
            width: 100px;
            height: 100 px;
          }
        }
      }
    }
  }
}

</style>
