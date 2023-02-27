import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { publicPath } from "../../vue.config";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  base: publicPath,
  routes,
});

export default router;
