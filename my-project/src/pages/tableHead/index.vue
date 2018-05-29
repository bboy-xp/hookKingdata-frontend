<template>
  <div class="container">
    <div>表单head</div>
    <button class="save" @click="saveTable">
      保存并下一步
    </button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  methods: {
    saveTable() {
      wx.navigateTo({
        url: "../tableBody/main"
      });
    }
  },

  created () {
  }
}
</script>

<style scoped>

</style>
