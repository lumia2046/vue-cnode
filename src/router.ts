import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index.vue";
import HomeContent from "./views/home/content.vue";
import Detail from "./views/detail/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "",
          redirect: "all"
        },
        {
          path: ":tabName",
          component: HomeContent
        }
      ]
    },
    {
      path: "/detail/:id",
      name: "detail",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./views/detail/index.vue")
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
