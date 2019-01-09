<template>
<main >

  <div class="card">

    <img class="avatar" :src="picture">
    <img class="gender" src="@/assets/image/male.svg" >
    <div class="infos">
      <div class="name capitalize">
        {{ name }}
      </div>
      <div class="birth">
        <i class="fas fa-fw fa-birthday-cake"></i>{{ birth }}
      </div>
      <div class="email">
        <i class="fas fa-fw fa-envelope"></i>{{ email }}
      </div>
      <div class="phone">
        <i class="fas fa-fw fa-phone"></i>{{ phone }}
      </div>
    </div>

  </div>




</main>
</template>

<script>
 export default {
    name: "info",
    props: {
      msg: String
    },
    data: function () {
  return {
    back: 'back',
    picture: 'https://image.flaticon.com/icons/svg/149/149992.svg',
    name: 'name',
    birth: 'birth',
    email: 'mail',
    phone: 'phone'
  }
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
      width: 570px;
      min-height: 185px;

      display: flex;

      padding: $global_gap;
      border-radius: 5px;
      box-shadow: $shadow;
      background: rgba(255, 255, 255, .8);

      .avatar {
        width: 100px;
        height: 100px;
        margin-right: $global_gap;
        border-radius: 50%;
      }

      .gender {
        width: 25px;
        height: 25px;
        margin-right: $global_gap;
        border-radius: 50%;
      }

      .infos {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;

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
            margin-right: $global_gap;
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
