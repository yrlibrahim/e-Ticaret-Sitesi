import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Electronic from "@/ProductsByCategory/Electronic/Electronic.vue";
import SmartPhones from "@/ProductsByCategory/Electronic/SmartPhones.vue";
import Laptops from "@/ProductsByCategory/Electronic/Laptops.vue";
import Groceries from "@/ProductsByCategory/Groceries.vue";
import Cosmetic from "@/ProductsByCategory/Cosmetic/Cosmetic.vue";
import Fragrances from "@/ProductsByCategory/Cosmetic/Fragrances.vue";
import Beauty from "@/ProductsByCategory/Cosmetic/Beauty.vue";
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
      path: "/SmartPhones",
      name: "SmartPhones",
      component: SmartPhones,
    },
    {
      path: "/Laptops",
      name: "Laptops",
      component: Laptops,
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
      path: "/Fragrances",
      name: "Fragrances",
      component: Fragrances,
    },
    {
      path: "/Beauty",
      name: "Beauty",
      component: Beauty,
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
