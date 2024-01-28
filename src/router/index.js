import { createRouter, createWebHistory } from "vue-router";
import homeVue from "../views/home.vue";
import productVue from "../views/product.vue";
import allProductVue from "../views/allProduct.vue";
import priceList from "../views/priceList.vue";
import contactUsVue from "../views/contactUs.vue";
import Login from "../views/Login.vue";
import signUp from "../views/signUp.vue";
import refundVue from "@/views/refund.vue";
import aboutUsVue from "@/views/aboutUs.vue";
import rulesVue from "@/views/rules.vue";
import checkoutVue from "@/views/checkout.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/checkout",
      name: "checkoutVue",
      component: checkoutVue,
    },
    {
      path: "/home",
      name: "home",
      component: homeVue,
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
      path: "/allProduct",
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
      component: Login,
    },
    {
      path: "/Signup",
      name: "signup",
      component: signUp,
    },
    {
      path: "/refund",
      name: "refund",
      component: refundVue,
    },
    {
      path: "/rules",
      name: "rules",
      component: rulesVue,
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: aboutUsVue,
    },
    {
      path: "/:notFound(.*)",
      redirect: "/home",
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
