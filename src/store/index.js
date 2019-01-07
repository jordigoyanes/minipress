import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      showMobileNav:null,
      isReadingPost:null,
  },
  mutations:{
      showMobileNav(state){
        state.showMobileNav = true;
      },
      closeMobileNav(state){
        state.showMobileNav = false;
      }
  }
})