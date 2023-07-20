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
import UpdateLandingPage from "../views/UpdateLandingPage.vue";
import LostMessagePage from "../views/LostMessagePage.vue";

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
    path: "/lostmatchpage/lostmessagepage", // This allows you to pass the item id as a parameter
    name: "lostmessagepage",
    component: LostMessagePage,
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
  {
    path: "/updatelandingpage",
    name: "updatelandingpage",
    component: UpdateLandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
