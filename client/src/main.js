import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import colors from "./assets/css/colors.less";
import styles from "./assets/css/style.less"
import BootstrapVue from "bootstrap-vue"


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "bootstrap/dist/css/bootstrap.min.css"


Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  colors,
  styles,
  render: h => h(App)
}).$mount("#app");
