import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import FoundMessagePage from "../views/FoundMessagePage.vue";
import LostMatchPage from "../views/LostMatchPage.vue";
import LostnonMatchPage from "../views/LostnonMatchPage.vue";
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
    path: "/found/foundmessagepage",
    name: "foundmessage",
    component: FoundMessagePage,
  },
  {
    path: "/lost/lostmatchpage",
    name: "lostmatch",
    component: LostMatchPage,
  },
  {
    path: "/lost/lostnonmatchpage",
    name: "lostnonmatch",
    component: LostnonMatchPage,
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
