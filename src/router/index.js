import { createRouter, createWebHistory } from "vue-router";
import homeVue from "../views/home.vue";
import productVue from "../views/product.vue";
import allProductVue from "../views/allProduct.vue";
import priceList from "../views/priceList.vue";
import contactUsVue from "../views/contactUs.vue"
import Login from "../views/Login.vue"
import signUp from "../views/signUp.vue"
import rules from "@/views/rules.vue"
const router = createRouter({
  history: createWebHistory(),
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
      path: "/rules",
      name: "rules",
      component: rules,
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: contactUsVue
    },
    {
      path: "/:product_slug/",
      name: "Product",
      component: productVue,
    },
    {
      path: "/allProduct/",
      name: "allProduct",
      component: allProductVue,
    },
    {
      path: "/priceList/",
      name: "priceList",
      component: priceList,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login ,
    },
    {
      path: "/Signup",
      name: "signup",
      component: signUp  ,
    },
    { 
     path: "/:notFound(.*)",
     redirect: "/home" 
    },
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
