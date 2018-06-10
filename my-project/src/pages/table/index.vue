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
      <div v-else-if="e.type === 'position'">
        <div class="inputQuestion">· {{e.label}}</div>
        <button @click="choosePosition">选择你的位置</button>
      </div>
      <div v-else-if="e.type === 'upload'">
        <button class="btn" @click="chooseImg">选择图片</button>
        <div v-for="(item , index) in tempFilePaths[0]" :key="index">
          <img :src="tempFilePaths[0][index]" mode="aspectFit"/>
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
import store from "@/store.js";
export default {
  components: {
    mpvuePicker
  },
  data() {
    return {
      index: 0,
      log1: {},
      double_index: [0, 0],
      tempFilePaths: []
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
    choosePosition() {
      wx.chooseLocation({
        success(res) {
          console.log(res);
        }
      });
      // console.log("走到这里了1");
      // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userLocation" 这个 scope
      // wx.getSetting({
      //   success(res) {
      //     // console.log("走到这里了2");
      //     if (!res.authSetting["scope.userLocation"]) {
      //       wx.authorize({
      //         scope: "scope.userLocation",
      //         success() {
      //           // console.log("走到这里了3");
      //           // 用户已经同意小程序使用功能，后续调用接口不会弹窗询问
      //           wx.userLocation({
      //             success: function(res) {
      //               console.log(res);
      //             }
      //           });
      //         }
      //       });
      //     } else {
      //       wx.userLocation({
      //         success: function(res) {
      //           console.log(res);
      //         }
      //       });
      //     }
      //   }
      // });
    },
    chooseImg() {
      const _this = this;
      wx.chooseImage({
        count: 3, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.$set(_this.tempFilePaths, 0, res.tempFilePaths);
          console.log(_this.tempFilePaths);
          // wx.previewImage({
          //   current: "",
          //   urls: _this.tempFilePaths
          // });
        }
      });
    }
    // pickerConfirm1(e) {
    //   this.index = e;
    // }
  },
  mounted() {
    wx.getSetting({
      success(res) {
        console.log(res);
        if (!res.authSetting["scope.userLocation"]) {
          wx.authorize({
            scope: "scope.userLocation",
            success() {
              console.log("userLocation授权成功");
            }
          });
        }
      }
    });
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
