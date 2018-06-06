<template>
  <div class="container">
    <div @click="createTable">创建表单</div>
  </div>
</template>

<script>
import mpvuePicker from "mpvue-picker";
export default {
  components: {
    mpvuePicker
  },
  data() {
    return {
    };
  },

  methods: {
    createTable() {
      wx.navigateTo({
        url: "../tableHead/main"
      });
    },
  },
};
</script>

<style scoped>
</style>
