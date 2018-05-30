import Vue from 'vue'
import Vuex from 'vuex'

const Fly = require('flyio');
const fly = new Fly();

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    form: {
      name:'',

    },
    
  },
  getters: {
    // showInput(state) {
    //   console.log('触发 showInput() getters');
    //   const findResult = state.checkResult.find((e) => {
    //     if (e === 'reason4') {
    //       return e;
    //     }
    //   });

    //   return findResult ? true : false;
    // }
  },
  mutations: {
    formNameChange: (state, payload) => {
      state.form.name = payload;
    },
  },
  actions: {
    
  }
})

export default store
