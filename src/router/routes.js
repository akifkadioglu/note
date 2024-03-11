import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import notes from "../pages/notes.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/notes", component: notes },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
