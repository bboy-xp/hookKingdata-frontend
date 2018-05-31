import Vue from 'vue'
import Vuex from 'vuex'

const Fly = require('flyio');
const fly = new Fly();

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    form: {
      name:'',
      felids: [],
    },
    
  },
  getters: {
  },
  mutations: {
    formNameChange: (state, payload) => {
      state.form.name = payload;
    },
    felidsChange: (state, payload) => {
      state.form.felids.push(payload);
    }
  },
  actions: {
    async submit({ state }) {
      const data = {
        name: state.form.name,
        felids: state.form.felids
      }
      console.log(data);
      const result = await fly.post('http://127.0.0.1:7001/postTableData',data);
      console.log(result);
      
    }
  }
})

export default store
