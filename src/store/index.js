import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    updateTitle(state, new_title) {
      state.tile = new_title;
    },
  },
});

export default store;
