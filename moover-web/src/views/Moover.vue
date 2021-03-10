<template>
  <div>
    <div class="field-container">
      <label class="label">Nombre y apellido</label>
      <div class="control">
        <input class="input" type="text" placeholder="nombre..." />
      </div>
    </div>
    <div class="field-container">
      <label class="label">RUC</label>
      <div class="control">
        <input class="input" type="text" placeholder="Ingrese su RUC" />
      </div>
    </div>
    <div class="field-container">
      <label class="label">Razón social</label>
      <div class="control">
        <input class="input" type="text" placeholder="Nombre de su empresa" />
      </div>
    </div>
    <div class="field-container">
      <label class="label">Remitente</label>
      <div class="control">
        <input class="input" type="text" placeholder="¿Quién envia?" />
      </div>
    </div>
    <div class="field-container">
      <label class="label">Destinatario</label>
      <div class="control">
        <input class="input" type="text" placeholder="¿Quién recibe?" />
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="ejemplo@"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>
    <div class="field-container">
      <label class="label">Producto a enviar</label>
      <div class="control">
        <input class="input" type="text" placeholder="¿Qué desea enviar?" />
      </div>
    </div>
    <div class="field-container">
      <label class="label">Mensaje</label>
      <div class="control">
        <input class="input" type="text" placeholder="..." />
      </div>
    </div>
    <div class="field is-grouped">
       
      <div class="control">
        <button class="button is-link is-light">Enviar</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
     
  </div>

</template>

<style lang="scss" scoped>
@import "~bulma/bulma.sass";
.input {
  width: 80% !important;
  margin-left: 110px;
  height: 86px;
  font-size: 25px;
}
textarea {
  margin-right: 110px !important;
  margin-left: 110px;
  height: 86px;
  font-size: 37px;
}

label {
  font-size: 40px !important;
  margin-left: 111px;
  font-family: arial;
  margin-top: 16px;
}
.field-container {
  margin-top: 30px;
}
select {
  margin-left: 108px;
  width: 69%;
}
button {
  margin-left: 116px;
  width: 100%;
  margin-top: 23px;
  height: 150px;
  height: 96px !important;
  font-size: 36px !important;
}
  
</style>
