<template>
  <div class="container">
    <div @click="createTable">创建表单</div>
    <!-- <button @click="chooseImg">选择图片</button> -->
    <div class="mpvue-picer">
      <button @click="showPicker">Press</button>
      <mpvue-picker mode="multiLinkageSelector" ref="mpvuePicker" :pickerValueArray="pickerValueArray" @pickerConfirm="pickerConfirm"></mpvue-picker>
    </div>
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
      // pickerValueArray: ['住宿费', '礼品费', '活动费', '通讯费', '补助'],
      pickerValueArray: [
        {
          label: "飞机票",
          children: [
            {
              label: "经济舱",
            },
            {
              label: "商务舱",
            }
          ]
        },
        {
          label: "火车票",
          children: [
            {
              label: "卧铺",
            },
            {
              label: "坐票",
            },
            {
              label: "站票",
            }
          ]
        },
        {
          label: "汽车票",
          children: [
            {
              label: "快班",
            },
            {
              label: "普通",
            }
          ]
        }
      ],
      // pickerValueDefault: [1]
    };
  },

  methods: {
    createTable() {
      wx.navigateTo({
        url: "../tableHead/main"
      });
    },
    pickerConfirm(e) {
      console.log(e);
    },
    showPicker() {
      this.$refs.mpvuePicker.show();
      // console.log(this.$refs);
    }
    // chooseImg() {
    //   wx.chooseImage({
    //     count: 1, // 默认9
    //     sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
    //     sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
    //     success: function(res) {
    //       // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    //       var tempFilePaths = res.tempFilePaths;
    //       console.log(tempFilePaths);
    //     }
    //   });
    // }
  },

  mounted() {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
};
</script>

<style scoped>
</style>
