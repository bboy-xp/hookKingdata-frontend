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
  mounted() {
    wx.authorize({
      scope: "scope.userLocation",
      success() {
        
      }
    });
  }
};
</script>

<style scoped>
.container {
  overflow: scroll;
}
.btn {
  height: 60rpx;
  width: 200rpx;
  line-height: 60rpx;
}
</style>
