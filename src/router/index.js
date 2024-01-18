import { createRouter, createWebHistory } from "vue-router";
import homeVue from "../views/home.vue";
import productVue from "../views/product.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: homeVue,
    },
    {
      path: "/product",
      name: "product",
      component: productVue,
    },
    // {
    //   path: "/:category_slug/:product_slug/",
    //   name: "Product",
    //   component: productVue,
    // },
    { path: "/:notFound(.*)", redirect: "/home" },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
