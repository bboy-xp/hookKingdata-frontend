<template>
  <div class="container">
    
    <div @click="addElement">
      添加字段
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },

  methods: {
    addElement() {
      wx.navigateTo({
        url: "../selectElement/main"
      });
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
