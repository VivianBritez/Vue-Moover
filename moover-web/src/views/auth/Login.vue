<template>
<div>
  <div class="field">
  <p class="control">
    <input class="input" type="email" placeholder="Email" v-model="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Contraseña" v-model="contraseña">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-danger is-outlined">
      Iniciar sesión
    </button>
  </p>
   <section class="section">
      <div class="container">
        <button v-if='!user' @click="doLogin" class="button">Login whit google</button>
      <template v-else>
        <h1> {{ user.displayName }} </h1>
        <button @click="doLogout" class="button">Logout</button>
      </template>
      
      </div>
    </section>
  <p class="link-register">Contáctanos</p>
</div>
</div>
</template>

<script>
import { fb, auth } from "../../firebase.js";
export default {
  name: "Register",
  data(){
      return{
        user: null
      };
    },
  methods: {
      async doLogin() {
      try {
        const provider = new fb.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        this.user= user.user
      } catch (error) {
        console.error(error.message);
      }
    },
    async doLogout() {
      try {
        await auth.signOut();
        this.user = null;
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "~bulma/bulma.sass";

input{
    background: blue !important;
    width: 76% !important;
    height: 85px !important;
    margin-left: 116px;
    margin-top: 60px;
    font-size: 41px !important;
    text-align: start;
}
.button{
    margin-left: 163px;
    margin-top: 41px;
    font-size: 50px;
    width: 66%;
    height: 77px;
    border-radius: 10px;
}
.link-register{
  font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    margin-top: 25px;
    text-align: center;
}
</style>
