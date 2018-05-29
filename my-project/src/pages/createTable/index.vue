<template>
  <div class="container">
    <div @click="createTable">创建表单</div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  methods: {
    createTable() {
      wx.navigateTo({
        url: "../tableHead/main"
      });
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
