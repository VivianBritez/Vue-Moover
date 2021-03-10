import Vue from "vue";
import VueRouter from "vue-router";
import RoomsView from "../views/RoomsView.vue";
import Inicio from "../views/Inicio.vue";
import Moover from "../views/Moover.vue";
import Login from "../views/auth/Login.vue";
import Pedido from "../views/Pedido.vue";
import Paquete from "../views/Paquete.vue";
import Contact from "../views/auth/Contact.vue";
import AuthView from "../views/AuthView.vue";
import Estado from '../views/Estado.vue'
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: RoomsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio
  },
  {
    path: "/estado",
    name: "Estado",
    component: Estado,
  },
  {
    path: "/paquete",
    name: "Paquete",
    component: Paquete,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/pedido ",
    name: "Pedido",
    component: Pedido,
  
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/moover",
    name: "Moover",
    component: Moover,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView
  },
  
];
console.log("me estoy cargando");

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Requires auth & no user
  if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({ name: "auth" });
    // No requires auth and user (auth)
  } else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) {
    next({ name: "Home" });
  } else {
    // Anything else
    next();
  }
});

export default router;
