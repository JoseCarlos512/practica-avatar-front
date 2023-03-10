import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PersonajesView from "../views/Personajes";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/personajes/:id",
    name: "personajes",
    component: PersonajesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
