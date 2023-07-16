import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import LostPage from "../views/LostPage.vue";
import FoundPage from "../views/FoundPage.vue";
import LostMatchPage from "../views/LostMatchPage.vue";
import FoundMessagePage from "../views/FoundMessagePage.vue";
import LostnonMatchPage from "../views/LostnonMatchPage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import ImprintPage from "../views/ImprintPage.vue";

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
    path: "/imprint",
    name: "imprint",
    component: ImprintPage,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
