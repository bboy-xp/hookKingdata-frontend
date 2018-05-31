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
      <input v-model="elementName" class="elementName" type="text">
      <div class="options" v-if="show">
        <div class="option">
          <div class="existOption" v-for="(option,index1) in options" :key="index1">
            <span @click="deleteOption(index1)"> - </span>
            <input @input="changeOption({e: $event, index1})" type="text" value="选项" class="optionText">
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
      <div @click="saveElement" class="bar">保存字段</div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data () {
    return {
      elementName: '',
      index: 0,
      choices: [
        { name: "单行文本", value: "single_line_text",  hidden: false },
        { name: "多行文本", value: "paragraph_text",  hidden: false },
        { name: "单项选择", value: "single_choice",  hidden: false },
        { name: "多项选择", value: "multiple_choice",  hidden: false },
        { name: "数字", value: "number",  hidden: false },
        { name: "手机", value: "phone", hidden: false },
        { name: "日期", value: "date", hidden: false },
        { name: "下拉框", value: "drop_down", hidden: false },
        { name: "地理位置", value: "position", hidden: false },
        { name: "评分", value: "score", hidden: false },
        { name: "上传文件", value: "upload", hidden: false },
      ],
      options: [
        { name: "option", value: '' },
        { name: "option", value: '' },
        { name: "option", value: '' },
      ],
      optionType: 'single_line_text',
      show: false,
    }
  },

  methods: {
    bindPickerChange: function(e) {
      this.index = e.mp.detail.value;
      this.optionType = this.choices[this.index].value;
      if (this.optionType == 'single_choice') {
        this.show = true;
      }else if (this.optionType == 'multiple_choice') {
        this.show = true;
      }else if (this.optionType == 'drop_down') {
        this.show = true;
      }else {
        this.show = false;
      }
      // console.log(this.optionType);
      this.elementName = '';
    },
    deleteOption(index1) {
      this.options.splice(index1,1)
      // console.log(this.options);
    },
    addOption() {
      this.options.push({ name: "option", value: '' })
    },
    saveElement() {
      let elementData = {};
      elementData.label = this.elementName;
      elementData.type = this.optionType;
      if (this.show) {
        // console.log('ok');
        elementData.choices = this.options; 
      }
      // console.log(elementData);
      store.commit('felidsChange', elementData);
      this.options = [
        { name: "option", value: '' },
        { name: "option", value: '' },
        { name: "option", value: '' },
      ];
      this.elementName = '';
      // console.log(store.state.form);
      wx.redirectTo({
        url: "../tableBody/main"
      });
    },
    changeOption(payload) {
      // console.log(payload.e.target.value);
      // console.log(e.target.value);
      this.options[payload.index1].value = payload.e.target.value;
      // console.log(this.options[payload.index1].value);
    }

  },

  mounted () {
    // console.log(store.state.form);
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
