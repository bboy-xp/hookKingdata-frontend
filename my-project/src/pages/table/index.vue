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
        <picker mode="selector" @change="bindPickerChange" :value="index" range-key="value" :range="e.choices">
          <view class="picker">
            当前选择：{{e.choices[index].value}}
          </view>
        </picker>
        <!-- <div class="mpvue-picer">
          <mpvue-picker mode="selector" ref="mpvuePicker1" range-key="value" :pickerValueArray="e.choices" @onConfirm="pickerConfirm1"></mpvue-picker>
          <view class="picker" @click="showPicker1">
            当前选择：{{e.choices[index[0]].value}}
          </view>
        </div> -->
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
      <div v-else-if="e.type === 'double_drop_down'">
        <div class="mpvue-picer">
          <mpvue-picker mode="multiLinkageSelector" ref="mpvuePicker2" :pickerValueArray="e.choices" @onConfirm="pickerConfirm2"></mpvue-picker>
          <view class="picker" @click="showPicker2">
            当前选择：{{e.choices[double_index[0]].label}} - {{e.choices[double_index[0]].children[double_index[1]].label}}
          </view>
        </div>
      </div>
    </div>
    <div>
    </div>
    <button class="submitBtn">提交</button>
  </div>
</template>

<script>
import mpvuePicker from "mpvue-picker";
import store from '@/store.js';
export default {
  components: {
    mpvuePicker
  },
  data() {
    return {
      index: 0,
      log1: {},
      double_index: [0,0],
    };
  },
  methods: {
    bindPickerChange: function(e) {
      this.index = e.mp.detail.value;
    },
    // showPicker1() {
    //   this.$refs.mpvuePicker1[0].show();
    // },
    showPicker2() {
      this.$refs.mpvuePicker2[0].show();
    },
    pickerConfirm2(e) {
      this.double_index = e;
    },
    // pickerConfirm1(e) {
    //   this.index = e;
    // }
  },
  mounted() {
  },
  created() {
    this.log1 = store.state.form;
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
