<template>
  <div>
    <div class="field">
      <form action="#" @submit.prevent="register">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Nombre" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Apellido" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" />
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
            <input class="input-mensaje" type="text" placeholder="Mensaje" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button type="submit" class="button is-danger is-outlined">
              Enviar
            </button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~bulma/bulma.sass";

input {
  width: 76% !important;
  height: 85px !important;
  margin-left: 116px;
  margin-top: 60px;
  font-size: 41px !important;
  text-align: start;
}
.button {
  margin-left: 163px;
  margin-top: 41px;
  font-size: 50px;
  width: 66%;
  height: 77px;
  border-radius: 10px;
}
.link-register {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  margin-top: 25px;
  text-align: center;
}
input.input-mensaje {
  margin-top: 30px;
  height: 231px !important;
}
</style>
