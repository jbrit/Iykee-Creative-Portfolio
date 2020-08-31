import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
      title: "",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
});

export default router;
