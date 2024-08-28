import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Electronic from "@/ProductsByCategory/Electronic.vue";
import Groceries from "@/ProductsByCategory/Groceries.vue";
import Cosmetic from "@/ProductsByCategory/Cosmetic.vue";
import HomeDecoration from "@/ProductsByCategory/HomeDecoration.vue";
import LoginPage from "@/user/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Electronics",
      name: "Electronic",
      component: Electronic,
    },
    {
      path: "/Groceries",
      name: "Groceries",
      component: Groceries,
    },
    {
      path: "/Cosmetics",
      name: "Cosmetic",
      component: Cosmetic,
    },
    {
      path: "/Home-Decoration",
      name: "HomeDecoration",
      component: HomeDecoration,
    },
    {
      path: "/Login",
      name: "LoginPage",
      component: LoginPage,
    },
  ],
});

export default router;
