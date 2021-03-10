<template>
<div>
    <footer>  
        <a href="www.facebook.com"> <font-awesome-icon :icon="['fab', 'facebook']"/> </a>
        <a href="www.instagram.com"><font-awesome-icon :icon="['fab', 'instagram']"/> </a>
        <a href="www.linkedin.com"><font-awesome-icon :icon="['fab', 'linkedin']"/> </a>
        <p > hola@moover.com </p>
        <p>Copyright 2021 Moover  |  Todos los derechos reservados</p>

    </footer>
</div>
</template>
<style scoped>
@import "~bulma/bulma.sass";
footer{
    background: #E4E1FC;
    max-height: 287px;
    text-align: center;
}
.icon-container{
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 2px;
}
a{
    color:black;
    margin: 20px;
    font-size: 64px;
}
.p-icon{
   font-size: 39px;
    margin-right: 300px;
    margin-top: 18px;
}
p{
    font-size: 34px;
    text-align: c
}

</style>