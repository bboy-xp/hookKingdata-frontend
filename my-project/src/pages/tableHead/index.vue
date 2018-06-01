<template>
  <div class="container">
    <div>表单head</div>
    <span>请输入表单名字</span>
    <input class="tableName" v-model="tableName" type="text" @input="tableNameChange">
    <button class="save" @click="saveTable">
      保存并下一步
    </button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data () {
    return {
      tableName: ''
    }
  },

  methods: {
    saveTable() {
      
      wx.redirectTo({
        url: "../tableBody/main"
      });
    },
    tableNameChange() {
      // console.log(this.tableName);
      store.commit('formNameChange', this.tableName);
      // console.log(store.state.form.name);
    }
  },

  created () {
  }
}
</script>

<style scoped>
.tableName {
  border: 1rpx solid grey;
}
</style>
