import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import ContactPage from "../views/ContactPage.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "About",
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
    meta: {
      title: "Resume",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

router.afterEach((to, from) => {
  from;
  store.commit("updateTitle", to.meta.title);
});

export default router;
