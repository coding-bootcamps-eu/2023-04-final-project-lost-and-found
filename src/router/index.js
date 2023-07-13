import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ImpressumPage from "../views/ImpressumPage.vue";
import LostPage from "../views/LostPage.vue";
import FoundPage from "../views/FoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/impressum",
    name: "impressum",
    component: ImpressumPage,
  },
  {
    path: "/lost",
    name: "lost",
    component: LostPage,
  },
  {
    path: "/found",
    name: "found",
    component: FoundPage,
  },
  {
    path: "/lost",
    name: "lost",
    component: () =>
      import(/* webpackChunkName: "lost" */ "../views/LostPage.vue"),
  },
  {
    path: "/found",
    name: "found",
    component: () =>
      import(/* webpackChunkName: "found" */ "../views/FoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
