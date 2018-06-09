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
    return {};
  },

  methods: {
    createTable() {
      wx.navigateTo({
        url: "../tableHead/main"
      });
    }
  },
  mounted() {
    wx.authorize({
      scope: "scope.userLocation",
      success() {
        // console.log('授权成功');
        // wx.getLocation({
        //   type: "gcj02 ",
        //   success: function(res) {
        //     // const latitude = res.latitude
        //     // const longitude = res.longitude
        //     // const speed = res.speed
        //     // const accuracy = res.accuracy
        //     console.log(res);
        //   }
        // })
        // wx.chooseLocation({
        //   success: function(res) {
        //     console.log(res);
        //   }
        // })

        wx.getLocation({
          type: "gcj02", //返回可以用于wx.openLocation的经纬度
          success: function(res) {
            var latitude = res.latitude;
            var longitude = res.longitude;
            wx.openLocation({
              latitude: latitude,
              longitude: longitude,
              scale: 28
            });
          }
        });
      }
    });
  }
};
</script>

<style scoped>
</style>
