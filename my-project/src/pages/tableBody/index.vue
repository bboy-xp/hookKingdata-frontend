<template>
  <div class="container">
    <div class="element" v-for="felid in felids" :key="felid">
      <span>{{felid.label}}({{felid.type}})</span>
    </div>
    <div @click="addElement">
      添加字段
    </div>
    <div @click="saveTable" class="save">保存表单</div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data () {
    return {
      tableData: {},
      felids: {},
    }
  },

  methods: {
    addElement() {
      wx.navigateTo({
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
    this.felids = store.state.form.felids;
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
