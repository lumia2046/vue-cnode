import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomeList from "./components/Home/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index/index"
    },
    {
      path: "/index",
      name: "home",
      component: Home,
      children: [
        {
          path: ":tabName",
          component: HomeList
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
