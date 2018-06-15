import Vue from 'vue'
import Vuex from 'vuex'

const Fly = require('flyio');
const fly = new Fly();

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    form: {
      name: '',
      fields: [],
    },

  },
  getters: {
  },
  mutations: {
    formNameChange: (state, payload) => {
      state.form.name = payload;
    },
    fieldsChange: (state, payload) => {
      state.form.fields.push(payload);
    }
  },
  actions: {
    async submit({ state }) {
      const data = {
        name: state.form.name,
        fields: state.form.fields
      }
      console.log(data);
      const result = await fly.post('http://127.0.0.1:7001/postTableData', data);
      if (result.data == 'ok') {
        wx.showModal({
          title: '提示',
          content: '提交成功',
          showCancel: false,
          success: function (res) {
            wx.redirectTo({
              url: '../table/main'
            });
          }
        });
      }
      wx.showModal({
        title: '提示',
        content: '提交成功',
        showCancel: false,
        success: function (res) {
          wx.redirectTo({
            url: '../table/main'
          });
        }
      });
    }
  }
})

export default store
