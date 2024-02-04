import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: "",
    cartCounter: 0,
    wishListCounter: 0,
    shuffleCounter: 0,
    isWishListed: Boolean,
    isWishListed: Boolean,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.isAuthenticated = false;
      }
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(
        (i) => i.product.id === item.product.id
      );
      if (exists.length) {
        exists[0].quantity =
          parseInt(exists[0].quantity) + parseInt(item.quantity);
      } else {
        state.cart.items.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    removeToken(state) {
      state.token = "";
      state.isAuthenticated = false;
    },
    clearCart(state) {
      state.cart = { items: [] };

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseCartCounter(state) {
      state.cartCounter++;
    },
    increaseShuffleCounter(state) {
      state.shuffleCounter++;
      state.isShuffled = false;
    },
    decreaseShuffleCounter(state) {
      state.shuffleCounter--;
      state.isShuffled = true;
    },
    increaseWishListCounter(state) {
      state.wishListCounter++;
      state.isWishListed = false;
    },
    decreaseWishListCounter(state) {
      state.wishListCounter--;
      state.isWishListed = true;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});
