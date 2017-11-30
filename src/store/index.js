import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    open (state) {
      state.loading = true;
    },
    close(state){
      state.loading = false;
    }
  }
})

export default store;