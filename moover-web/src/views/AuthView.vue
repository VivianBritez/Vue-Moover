<template>
  <article class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <!-- Login form -->
          <template v-if="isLogin">
            <h1 class="title has-text-centered animate__animated animate__bounce">Iniciar sesión</h1>
            <form @submit.prevent="doLogin"> 
              <div class="field">
                <p>Email</p>
                <div class="control">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <p>Password</p>
                <div class="control">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
              </div>

              <div class="field has-text-right">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-link"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Login
                  </button>
                </div>
              </div>
              <a href="#" @click="isLogin = false">¿No tienes cuenta?</a>
            </form>
          </template>
          <!-- End of login form -->

          <!-- Register form -->
          <template v-else>
            <h1 class="title has-text-centered">Register</h1>
            <form @submit.prevent="doRegister">
              <div class="field">
                <p>Name</p>
                <div class="control">
                  <input
                    v-model="userData.name"
                    class="input"
                    type="text"
                    placeholder="Ingrese su nombre"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <p>Email</p>
                <div class="control">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <p>Password</p>
                <div class="control">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>
              </div>

              <div class="field has-text-right">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-link"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Register
                  </button>
                </div>
              </div>
              <a href="#" @click="isLogin = true">Iniciar sesion</a>
            </form>
          </template>
          
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      isLogin: true,
      isLoading: false,
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
       redirect() {
      this.$router.push({ name: "Home" });
    },
    resetData() {
      this.userData.name = this.userData.email = this.userData.password = "";
    },
    async doLogin() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doLogin", {
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Logged in");
          this.$toast.success("Logged in");
        this.resetData();
        this.redirect();
      } catch (error) {
        console.error(error.message);
         this.$toast.error(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async doRegister() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Account created");
        this.$toast.success("Account created")
        this.resetData();
        this.redirect();
      } catch (error) {
        console.error(error.message);
         this.$toast.error(error.message);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~bulma/bulma.sass";
p{
  font-size: 50px;
  font-family: arial;
}
h1{
    font-family: arial;
    font-size: 65px !important;
    margin-top: 109px;
}
input.input{
  margin-top: 32px;
    font-size: 32px;
}
a{
  font-size: 40px;
  font-family: cursive;
}
button{
    height: 60px !important;
    font-weight: 52px !important;
    width: 258px !important;
    font-size: 32px !important;
}
</style>
