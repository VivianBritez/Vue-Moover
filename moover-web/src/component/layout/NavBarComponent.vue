<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="animate__animated animate__shakeY">Moover</h1>
        <router-link :to="{ name: 'home' }" class="navbar-item"> </router-link>
        <a
          @click.prevent="toggleNavBar"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navBar"
          ref="burger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navBar" class="navbar-menu" ref="navBar">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'Inicio' }">
            Inicio
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Contact' }">
            Contacto
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Paquete' }">
            Mi Paquete
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'Moover' }">
            Pedir Moover
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="user">
                <a @click="doLogout" class="button is-light">
                  Log out
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBarComponent',
  mounted () {
    this.burger = this.$refs.burger
    this.navBar = this.$refs.navBar
  },
  data () {
    return {
      burger: null,
      navBar: null
    }
  },
  methods: {
    toggleNavBar () {
      this.burger.classList.toggle('is-active')
      this.navBar.classList.toggle('is-active')
    },
    async doLogout () {
      try {
        await this.$store.dispatch('user/doLogout')
        this.$router.push({ name: 'auth' })
        this.$toast.success('Logged out')
      } catch (error) {
        this.$toast.error(error.message)
        console.error(error.message)
      }
    }
  },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/bulma.sass";
.navbar-item img {
  max-height: 200px;
}
.navbar__logo {
  width: 200px;
  height: auto;
}
.navbar {
  background: #6e5be3;
}
a {
  font-size: 42px !important;
  font-family: arial;
  margin-left: 19px;
}
h1 {
  color: white;
  font-size: 123px;
  margin-left: 50px;
  margin-top: 11px;
  font-family: arial;
}
.navbar-burger {
  color: white !important;
  height: 10.25rem !important;
}
.nav-burger span {
  height: 4px !important;
  width: 24px !important;
}
</style>
