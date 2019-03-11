import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment";
import "../node_modules/github-markdown-css/github-markdown.css";

moment.locale("zh-cn");

Vue.config.productionTip = false;

Vue.filter("formatData", (value: string): string => moment(value).fromNow());

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
