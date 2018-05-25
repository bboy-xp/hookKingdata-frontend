<template>
  <div class="container">
    <div class="title">{{log.name}}</div>
    <div class="componentBox" v-for="(e, fieldKey, fieldIndex) in log.fields" :key="fieldIndex">
      <!-- <div>{{e.type}}</div> -->
      <div v-if="e.type === 'single_line_text'">
        <div class="inputQuestion">· {{e.label}}</div>
        <input class="inputBox" auto-focus/>
      </div>
      <div v-else-if="e.type === 'single_choice'">
        <!-- <div>单选框</div> -->
        <div class="inputQuestion">· {{e.label}}</div>
        <radio-group class="radio-group" @change="radioChange">
          <div class="radioItem" v-for="(choice, choiceKey, choiceIndex) in e.choices" :key="choiceIndex">
            <label>
              <radio :value="choice.name" :checked="choice.checked"/>{{choice.name}}
            </label>
          </div>
        </radio-group>
      </div>
      <div v-else-if="e.type === 'multiple_choice'">
        <!-- <div>复选框</div> -->
        <div class="inputQuestion">· {{e.label}}</div>
        <!-- <checkbox-group class="checkbox-group" @change="checkboxChange">
          <div class="checkbox" v-for="(choice, choiceKey, choiceIndex) in e.choices" :key="choiceIndex">
            <label>
              <radio :value="choice.name" :checked="choice.checked"/>{{choice.name}}
            </label>
          </div>
        </checkbox-group> -->
        <checkbox-group class="checkbox-group" bindchange="checkboxChange">
          <label class="checkboxItem" v-for="(choice, choiceKey, choiceIndex) in e.choices" :key="choiceIndex">
            <checkbox :value="choice.name" :checked="choice.checked"/>{{choice.name}}
          </label>
        </checkbox-group>
      </div>
      <div v-else-if="e.type === 'paragraph_text'">
        <div class="inputQuestion">· {{e.label}}</div>
        <textarea class="textareaStyle" show-confirm-bar="false" cursor-spacing="50" auto-focus="true" maxlength="400"></textarea>
      </div>
    </div>
    <button class="submitBtn">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: {
        name: "你的基本信息",
        description: "",
        fields: [
          {
            field_4: {
              label: "姓名",
              type: "single_line_text",
              notes: "",
              private: false,
              validation: {}
            }
          },
          {
            field_5: {
              label: "你是",
              type: "single_choice",
              notes: "",
              private: false,
              validation: {},
              choices: [
                { name: "男生", value: "cJqT", hidden: false },
                { name: "女生", value: "fGO4", hidden: false }
              ],
              allow_other: false
            }
          },
          {
            field_6: {
              label: "你所在的学校或单位",
              type: "single_line_text",
              notes: "",
              private: false,
              validation: {}
            }
          },
          {
            field_7: {
              label: "你所在的年级",
              type: "single_choice",
              notes: "",
              private: false,
              validation: {},
              choices: [
                { name: "大一", value: "0sb9", hidden: false },
                { name: "大二", value: "FX1K", hidden: false },
                { name: "大三", value: "qQ5p", hidden: false },
                { name: "大四", value: "k5XG", hidden: false },
                { name: "研究生", value: "j1zS", hidden: false },
                { name: "已毕业", value: "nS2D", hidden: false }
              ],
              allow_other: false
            }
          },
          {
            field_8: {
              label: "你所学的专业",
              type: "single_line_text",
              notes: "",
              private: false,
              validation: {}
            }
          },
          {
            field_9: {
              label: "你正在使用的手机号",
              type: "single_line_text",
              notes: "",
              private: false,
              validation: {}
            }
          },
          {
            field_10: {
              label: "你对计算机操作的熟练程度是?",
              type: "single_choice",
              notes: "",
              private: false,
              validation: {},
              choices: [
                { name: "纯小白只会开机", value: "et4t", hidden: false },
                {
                  name: "会基本的文档，表格，PPT的编辑操作",
                  value: "4rND",
                  hidden: false
                },
                {
                  name: "熟练使用Office，Adobe等软件",
                  value: "koIU",
                  hidden: false
                },
                { name: "上天下地，无所不能", value: "2g9q", hidden: false }
              ],
              allow_other: false
            }
          },
          {
            field_11: {
              label: "你想参加Jser训练营的原因是?",
              type: "multiple_choice",
              notes: "",
              private: false,
              validation: {},
              choices: [
                { name: "想提升自己的职业技能", value: "OZcp", hidden: false },
                { name: "想从事互联网相关工作", value: "7X0R", hidden: false },
                {
                  name: "对互联网、电子产品有浓厚兴趣",
                  value: "b6ia",
                  hidden: false
                },
                {
                  name: "想认识更多兴趣相投的校友",
                  value: "wLN9",
                  hidden: false
                },
                { name: "我还有其他的原因*", value: "BmjG", hidden: false }
              ],
              allow_other: false
            }
          },
          {
            field_12: {
              label: "其他原因",
              type: "single_line_text",
              notes: "",
              private: false,
              validation: {}
            }
          },
          {
            field_13: {
              label:
                "介绍一下你自己，说说你的兴趣爱好以及在大学的理想和成就（140字以上）",
              type: "paragraph_text",
              notes: "",
              private: false,
              validation: {}
            }
          }
        ]
      }
    };
  },

  components: {},

  methods: {},

  mounted() {
    // const fields = this.log.fields;
    // for (const e of fields) {
    //   for (const key in e) {
    //     let type = e[key].type;
    //     let label = e[key].label;
    //     let choices = e[key].choices;
    //     if(choices) {
    //       if(type == 'multiple_choice') {
    //         this.checkboxs.push(choices);
    //       }else {
    //         this.radios.push(choices);
    //       }
    //     }
    //     this.typeArr.push({ type: type, label: label, choices: choices });
    //   }
    // }
    // console.log(this.checkboxs);
    // console.log(this.radios);
    const trimedField = {};
    const fields = this.log.fields;
    for (const obj of fields) {
      for (const subObjKey in obj) {
        trimedField[subObjKey] = obj[subObjKey];
      }
    }
    this.log.fields = trimedField;
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
