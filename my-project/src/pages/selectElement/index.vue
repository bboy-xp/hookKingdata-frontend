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
      <div class="options" v-if="show1">
        <div class="option">
          <div class="existOption" v-for="(option, index1) in options" :key="index1">
            <span @click="deleteOption(index1)"> - </span>
            <input @input="changeOption({e: $event, index1})" type="text" value="选项" class="optionText">
          </div>
          <div class="addOption">
            <span @click="addOption"> + </span>
            <span>新增选项</span>
          </div>
        </div>
      </div>
      <div class="options" v-if="show2">
        <div class="option">
          <div class="existOption" v-for="(option, index1) in double_options" :key="index1">
            <span @click="deleteOption2(index1)"> - </span>
            <input @input="changeOption2({e: $event, index1})" type="text" value="选项" class="optionText">
            <div class="childOptions">
              <div class="existOption" v-for="(option1, index2) in option.children" :key="index2">
                <span @click="deleteChildOption2(index2, index1)"> - </span>
                <input @input="changeChildrenOption2({e: $event, index2, index1})" type="text" value="二级选项" class="optionText">
                <span @click="addChildOption2(index2,index1)"> + </span>
              </div>
            </div>
          </div>
          <div class="addOption">
            <span @click="addOption2"> + </span>
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
        { name: "二级下拉框", value: "double_drop_down", hidden: false },
        { name: "地理位置", value: "position", hidden: false },
        { name: "评分", value: "score", hidden: false },
        { name: "上传文件", value: "upload", hidden: false },
      ],
      options: [
        { name: "option", value: '' },
        { name: "option", value: '' },
        { name: "option", value: '' },
      ],
      double_options: [
        { name: "option", value: '', children: [{
          label:"二级选项1"
        },{
          label:"二级选项2"
        }] },
        { name: "option", value: '', children: [{
          label:"二级选项1"
        },{
          label:"二级选项2"
        }] },
      ],
      optionType: 'single_line_text',
      show1: false,
      show2: false,
    }
  },

  methods: {
    bindPickerChange: function(e) {
      this.index = e.mp.detail.value;
      this.optionType = this.choices[this.index].value;
      console.log(this.optionType);
      if (this.optionType == 'single_choice') {
        this.show1 = true;
      }else if (this.optionType == 'multiple_choice') {
        this.show1 = true;
      }else if (this.optionType == 'drop_down') {
        this.show1 = true;
      }else {
        this.show1 = false;
      }
      if (this.optionType == "double_drop_down") {
        this.show2 = true;
      }else {
        this.show2 = false;
      }
      // console.log(this.optionType);
      this.elementName = '';
    },
    deleteOption(index1) {
      this.options.splice(index1,1)
      // console.log(this.options);
    },
    deleteOption2(index1) {
      console.log(index1);
      this.double_options.splice(index1,1)
      // console.log(this.options);
    },
    deleteChildOption2(index2, index1) {
      this.double_options[index1].children.splice(index2,1)
      // console.log(this.options);
    },
    addOption() {
      this.options.push({ name: "option", value: '' })
    },
    addOption2() {
      this.double_options.push({ name: "option", value: '', children: [{
          label:"二级选项1"
        },{
          label:"二级选项2"
        }] })
    },
    addChildOption2(index2,index1) {
      this.double_options[index1].children.push({
        label:"二级选项"
      })
    },
    saveElement() {
      let elementData = {};
      elementData.label = this.elementName;
      elementData.type = this.optionType;
      if (this.show1) {
        // console.log('ok');
        elementData.choices = this.options; 
      };
      if (this.show2) {
        // console.log('ok');
        elementData.choices = this.double_options; 
      }
      // console.log(elementData);
      store.commit('fieldsChange', elementData);
      this.options = [
        { name: "option", value: '' },
        { name: "option", value: '' },
        { name: "option", value: '' },
      ];
      this.double_options = [
        { label: '', children: [{
          label:"二级选项1"
        },{
          label:"二级选项2"
        }] },
        { label: '', children: [{
          label:"二级选项1"
        },{
          label:"二级选项2"
        }] },
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
    },
    changeOption2(payload) {
      // console.log(payload.e.target.value);
      // console.log(e.target.value);
      this.double_options[payload.index1].label = payload.e.target.value;
      console.log(this.double_options[payload.index1].label);
    },
    changeChildrenOption2(payload) {
      this.double_options[payload.index1].children[payload.index2].label = payload.e.target.value;
      console.log(this.double_options[payload.index1].children[payload.index2].label);
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
.childOptions {
  padding: 20rpx 0 20rpx 50rpx;
}
</style>
