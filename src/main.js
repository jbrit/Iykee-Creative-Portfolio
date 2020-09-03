import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './registerServiceWorker'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  data: {
    mouseHoveringLink: false,
  },
}).$mount("#app");
