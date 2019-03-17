import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/index.vue";
import HomeContent from "./views/home/content.vue";

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
      path: "/user/:name",
      name: "user",
      component: () => import("./views/user/index.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login/index.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/profile/index.vue")
    },
    {
      path: "/publish",
      name: "publish",
      component: () => import("./views/publish/index.vue")
    }
  ]
});
