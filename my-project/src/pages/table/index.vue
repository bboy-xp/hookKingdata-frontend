<template>
  <div class="container">
    <div class="title">{{log1.name}}</div>
    <div class="componentBox" v-for="(e, fieldKey, fieldIndex) in log1.fields" :key="fieldIndex">
      <div v-if="e.type === 'single_line_text'">
        <div class="inputQuestion">· {{e.label}}</div>
        <input class="inputBox" auto-focus/>
      </div>
      <div v-else-if="e.type === 'single_choice'">
        <div class="inputQuestion">· {{e.label}}</div>
        <radio-group class="radio-group" @change="radioChange">
          <div class="radioItem" v-for="(choice, choiceKey, choiceIndex) in e.choices" :key="choiceIndex">
            <label>
              <radio :value="choice.value" :checked="choice.checked"/>{{choice.value}}
            </label>
          </div>
        </radio-group>
      </div>
      <div v-else-if="e.type === 'multiple_choice'">
        <div class="inputQuestion">· {{e.label}}</div>
        <checkbox-group class="checkbox-group" bindchange="checkboxChange">
          <label class="checkboxItem" v-for="(choice, choiceKey, choiceIndex) in e.choices" :key="choiceIndex">
            <checkbox :value="choice.value" :checked="choice.checked"/>{{choice.value}}
          </label>
        </checkbox-group>
      </div>
      <div v-else-if="e.type === 'paragraph_text'">
        <div class="inputQuestion">· {{e.label}}</div>
        <textarea class="textareaStyle" show-confirm-bar="false" cursor-spacing="50" auto-focus="true" maxlength="400"></textarea>
      </div>
      <div v-else-if="e.type === 'drop_down'">
        <div class="inputQuestion">· {{e.label}}</div>
        <picker @change="bindPickerChange" :value="index" range-key="name" :range="e.choices">
          <view class="picker">
            当前选择：{{e.choices[index].name}}
          </view>
        </picker>
      </div>
      <div v-else-if="e.type === 'number'">
        <div class="inputQuestion">· 数字</div>
        <input class="inputBox" auto-focus/>
      </div>
      <div v-else-if="e.type === 'phone'">
        <div class="inputQuestion">· 电话</div>
        <input class="inputBox" auto-focus/>
      </div>
      <div v-else-if="e.type === 'email'">
        <div class="inputQuestion">· 邮箱</div>
        <input class="inputBox" auto-focus/>
      </div>
    </div>
    <div>
    </div>
    <button class="submitBtn">提交</button>
  </div>
</template>

<script>
import store from '@/store.js';
export default {
  data() {
    return {
      index: 0,
      log1: {},
      // log1: {
      //   name: "你的基本信息",
      //   description: "",
      //   fields: [
      //     {
      //       field_4: {
      //         label: "姓名",
      //         type: "single_line_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_5: {
      //         label: "你是",
      //         type: "single_choice",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "男生", value: "cJqT", hidden: false },
      //           { name: "女生", value: "fGO4", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_6: {
      //         label: "你所在的学校或单位",
      //         type: "single_line_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_7: {
      //         label: "你所在的年级",
      //         type: "single_choice",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "大一", value: "0sb9", hidden: false },
      //           { name: "大二", value: "FX1K", hidden: false },
      //           { name: "大三", value: "qQ5p", hidden: false },
      //           { name: "大四", value: "k5XG", hidden: false },
      //           { name: "研究生", value: "j1zS", hidden: false },
      //           { name: "已毕业", value: "nS2D", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_8: {
      //         label: "你所学的专业",
      //         type: "single_line_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_9: {
      //         label: "你正在使用的手机号",
      //         type: "single_line_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_10: {
      //         label: "你对计算机操作的熟练程度是?",
      //         type: "single_choice",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "纯小白只会开机", value: "et4t", hidden: false },
      //           {
      //             name: "会基本的文档，表格，PPT的编辑操作",
      //             value: "4rND",
      //             hidden: false
      //           },
      //           {
      //             name: "熟练使用Office，Adobe等软件",
      //             value: "koIU",
      //             hidden: false
      //           },
      //           { name: "上天下地，无所不能", value: "2g9q", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_11: {
      //         label: "你想参加Jser训练营的原因是?",
      //         type: "multiple_choice",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "想提升自己的职业技能", value: "OZcp", hidden: false },
      //           { name: "想从事互联网相关工作", value: "7X0R", hidden: false },
      //           {
      //             name: "对互联网、电子产品有浓厚兴趣",
      //             value: "b6ia",
      //             hidden: false
      //           },
      //           {
      //             name: "想认识更多兴趣相投的校友",
      //             value: "wLN9",
      //             hidden: false
      //           },
      //           { name: "我还有其他的原因*", value: "BmjG", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_12: {
      //         label: "其他原因",
      //         type: "single_line_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_13: {
      //         label:
      //           "介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就（140字以上）",
      //         type: "paragraph_text",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_14: {
      //         label: "地区",
      //         type: "drop_down",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "哈尔滨", value: "t8g0", hidden: false },
      //           { name: "大庆", value: "H4vA", hidden: false },
      //           { name: "齐齐哈尔", value: "cr40", hidden: false },
      //           { name: "牡丹江", value: "MiwG", hidden: false },
      //           { name: "佳木斯", value: "q9IM", hidden: false },
      //           { name: "黑河", value: "XmlA", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_15: {
      //         label: "数字",
      //         type: "number",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_16: {
      //         label: "电话",
      //         type: "phone",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_17: {
      //         label: "邮箱",
      //         type: "email",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     }
      //   ]
      // },
      // log2: {
      //   name: "hh",
      //   description: "还是",
      //   fields: [
      //     {
      //       field_2: {
      //         label: "地区",
      //         type: "drop_down",
      //         notes: "",
      //         private: false,
      //         validation: {},
      //         choices: [
      //           { name: "哈尔滨", value: "t8g0", hidden: false },
      //           { name: "大庆", value: "H4vA", hidden: false },
      //           { name: "齐齐哈尔", value: "cr40", hidden: false },
      //           { name: "牡丹江", value: "MiwG", hidden: false },
      //           { name: "佳木斯", value: "q9IM", hidden: false },
      //           { name: "黑河", value: "XmlA", hidden: false }
      //         ],
      //         allow_other: false
      //       }
      //     },
      //     {
      //       field_3: {
      //         label: "数字",
      //         type: "number",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_4: {
      //         label: "电话",
      //         type: "phone",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     },
      //     {
      //       field_5: {
      //         label: "邮箱",
      //         type: "email",
      //         notes: "",
      //         private: false,
      //         validation: {}
      //       }
      //     }
      //   ]
      // }
    };
  },

  components: {},

  methods: {
    bindPickerChange: function(e) {
      this.index = e.mp.detail.value;
    }
  },
  mounted() {
    
    // console.log(store.state.form);
  },
  created() {
    this.log1 = store.state.form;
    // const trimedField1 = {};
    // const fields1 = this.log1.fields;
    // for (const obj of fields1) {
    //   for (const subObjKey in obj) {
    //     trimedField1[subObjKey] = obj[subObjKey];
    //   }
    // }
    // this.log1.fields = trimedField1;
    // const trimedField2 = {};
    // const fields2 = this.log2.fields;
    // for (const obj of fields2) {
    //   for (const subObjKey in obj) {
    //     trimedField2[subObjKey] = obj[subObjKey];
    //   }
    // }
    // this.log2.fields = trimedField2;



    // console.log(this.log2.fields.field_2.choices);
    // console.log(this.log2.fields);
  }
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 50rpx;
  margin-bottom: 40rpx;
}
.inputBox {
  border: 2rpx solid rgb(195, 201, 208);
  width: 492rpx;
  margin-bottom: 10rpx;
  padding: 0 12rpx;
  font-size: 24rpx;
}
.inputQuestion {
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  font-size: 30rpx;
  color: rgb(34, 34, 34);
  font-weight: bold;
}
.componentBox {
  margin-bottom: 20rpx;
}
.radio-group {
  font-size: 24rpx;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
  font-weight: bold;
}

.radioItem {
  display: block;
  margin: 10rpx 0;
}
.checkbox-group {
  font-size: 24rpx;
  margin-top: 30rpx;
  margin-bottom: 10rpx;
  font-weight: bold;
}
.checkboxItem {
  display: block;
  margin: 10rpx 0;
}
.textareaStyle {
  margin-top: 10rpx;
  border: 2rpx solid rgb(195, 201, 208);
  border-radius: 10rpx;
  font-size: 30rpx;
  padding: 10rpx;
}
.picker {
  font-size: 24rpx;
  margin-left: 50rpx;
}
.submitBtn {
  height: 64rpx;
  width: 276rpx;
  padding: 0 110rpx;
  font-size: 28rpx;
  background-color: rgb(255, 133, 0);
  color: white;
  margin: 66rpx auto 30rpx auto;
}
</style>
