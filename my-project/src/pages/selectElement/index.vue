<template>
  <div class="container">
    <div class="body">
      <span>字段类型</span>
      <picker @change="bindPickerChange" :value="index" range-key="name" :range="choices">
        <view class="picker">
          当前选择：{{choices[index].name}}
        </view>
      </picker>
      <span>字段名称</span>
      <input class="elementName" type="text">
      <div class="options" v-if="show">
        <div class="option">
          <div class="existOption" v-for="(option,index1) in options" :key="index1">
            <span @click="deleteOption(index1)"> - </span>
            <input type="text" value="选项" class="optionText">
          </div>
          <div class="addOption">
            <span @click="addOption"> + </span>
            <span>新增选项</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footBar">
      <div class="bar">删除字段</div>
      <div class="bar">保存字段</div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      index: 0,
      choices: [
        { name: "单行文本",  hidden: false },
        { name: "多行文本",  hidden: false },
        { name: "单项选择",  hidden: false },
        { name: "多项选择",  hidden: false },
        { name: "数字",  hidden: false },
        { name: "手机", hidden: false },
        { name: "日期", hidden: false },
        { name: "下拉框", hidden: false },
        { name: "地理位置", hidden: false },
        { name: "评分", hidden: false },
        { name: "上传文件", hidden: false },
      ],
      options: [
        { name: "选项" },
        { name: "选项" },
        { name: "选项" },
      ],
      optionType: '单行文本',
      show: false,
    }
  },

  methods: {
    bindPickerChange: function(e) {
      this.index = e.mp.detail.value;
      this.optionType = this.choices[this.index].name;
      if (this.optionType == '单项选择') {
        this.show = true;
      }else if (this.optionType == '多项选择') {
        this.show = true;
      }else if (this.optionType == '下拉框') {
        this.show = true;
      }else {
        this.show = false;
      }
    },
    deleteOption(index1) {
      this.options.splice(index1,1)
      console.log(this.options);
    },
    addOption() {
      this.options.push({ name: "选项" })
    },

  },

  created () {
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.elementName {
  border: 1rpx solid rgb(195, 201, 208);
}
.optionText {
  display: inline-block;
  border: 1rpx solid rgb(195, 201, 208);
}
.body {
  flex: 1;
}
.footBar {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}
.bar {
  flex-basis: 50%;
}
</style>
