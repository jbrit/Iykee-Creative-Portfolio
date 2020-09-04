import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "",
  },
  mutations: {
    updateTitle(state, new_title) {
      state.title = new_title;
    },
  },
});

export default store;
