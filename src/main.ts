import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquare,
  faCheckSquare,
  faCannabis,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import GenericButton from "./components/GenericButton.vue";

library.add(faSquare, faCheckSquare, faCannabis, faChevronLeft, faChevronRight);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
Vue.component("GenericButton", GenericButton);

Vue.config.productionTip = false;

import "./assets/app.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
