import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HeaderViewVue from "@/layout/HeaderView.vue";
import FooderViewVue from "@/layout/FooderView.vue";

import Erro404ViewVue from "@/layout/Erro404View.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        default: HomeView,
        helper: HeaderViewVue,
        fooder: FooderViewVue,
      },
    },

    {
      path: "/:catchAll(.*)",
      component: Erro404ViewVue,
    },
  ],
});

export default router;
