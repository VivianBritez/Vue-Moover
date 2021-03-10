import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin   } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, faFacebook, faInstagram, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueToast, {
  position: "bottom"
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");