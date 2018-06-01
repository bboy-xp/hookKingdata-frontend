<template>
  <div class="container">
    <div class="element" v-for="felid in fields" :key="felid">
      <span>{{felid.label}}({{felid.type}})</span>
    </div>
    <div @click="addElement">
      添加字段
    </div>
    <div @click="saveTable" class="save">保存并查看表单</div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data () {
    return {
      tableData: {},
      fields: {},
    }
  },

  methods: {
    addElement() {
      wx.redirectTo({
        url: "../selectElement/main"
      });
    },
    saveTable() {
      store.dispatch("submit");
    }
  },

  mounted () {
    console.log(store.state.form);
    this.tableData = store.state.form;
    this.fields = store.state.form.fields;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  align-items: center;
}
.element {
}
.save {
  justify-content: flex-end;
}
</style>
