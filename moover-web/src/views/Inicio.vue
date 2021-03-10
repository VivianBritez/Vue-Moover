<template>
 <div id="home">
  <h1> La manera más segura y ágil de envio </h1>
  <p>Somos una Startup que se encarga del envio de paquetes de manera segura y sanitizada.</p>
  <img class="img animate__animated animate__backInLeft" alt='logistic-img' src='../assets/moover.jpg' >
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto.</p>
   <router-view/>
  <img class= "img " alt="give-on-time" src='../assets/img4.jpg'>
  <p>Entrega en menor tiempo</p>
  <img class= "img" alt="give-on-time" src='../assets/img2.jpg'>
  <p>Revista la ruta de tu paquete</p>
  <img class= "img" alt="give-on-time" src='../assets/img3.jpg'>
  <p>Ahorra dinero</p>
  <pm-footer />
  </div>

</template>

<script>
import PmFooter from '@/component/layout/Footer.vue'
export default {
  components: { PmFooter }
}

</script>
<style lang=scss scoped>
#home{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-content: space-between;
    margin-right: 10px;
    padding: 46px;
}
h1{
    font-family:Arial, Helvetica, sans-serif;
    font-size: 70px;
    text-align: center;
    margin-top: 84px;
}
p{
  font-size: 34px;
    text-align: center;
    font-family: arial;
}
img.img{
      height: 800px;
}

img{

    border-radius: 10px;
    max-width: 100%;
    max-height: 732px;
}
</style>
