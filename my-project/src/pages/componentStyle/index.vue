<template>
  <div class="container">
    <div class="inputQuestion">姓名</div>
    <input class="inputBox" auto-focus/>
    <div class="inputQuestion">性别</div>
    <radio-group class="radio-group" @change="radioChange1">
      <div class="radio" v-for="(choice, choiceKey, choiceIndex) in choices1" :key="choiceIndex">
        <label>
          <radio :value="choice.name" :checked="choice.checked"/>{{choice.name}}
        </label>
      </div>
    </radio-group>
    <div class="inputQuestion">年级</div>
    <radio-group class="radio-group" @change="radioChange2">
      <div class="radio" v-for="(choice, choiceKey, choiceIndex) in choices2" :key="choiceIndex">
        <label>
          <radio :value="choice.name" :checked="choice.checked"/>{{choice.name}}
        </label>
      </div>
    </radio-group>
    <div class="inputQuestion">动机</div>
    <checkbox-group class="checkbox-group" @change="checkboxChange">
      <div class="checkbox" v-for="(choice, choiceKey, choiceIndex) in choices3" :key="choiceIndex">
        <label>
          <radio :value="choice.name" :checked="choice.checked"/>{{choice.name}}
        </label>
      </div>
    </checkbox-group>
    <div class="inputQuestion">自我介绍</div>
    <textarea class="textareaStyle" auto-height maxlength="400"></textarea>
  </div>
</template>

<script>

export default {
  data() {
    return {
      choices1: [
        { name: "男生", value: "cJqT", hidden: false },
        { name: "女生", value: "fGO4", hidden: false }
      ],
      choices2: [
        { name: "大一", value: "0sb9", hidden: false },
        { name: "大二", value: "FX1K", hidden: false },
        { name: "大三", value: "qQ5p", hidden: false },
        { name: "大四", value: "k5XG", hidden: false },
        { name: "研究生", value: "j1zS", hidden: false },
        { name: "已毕业", value: "nS2D", hidden: false }
      ],
      choices3: [
        { name: "想提升自己的职业技能", value: "OZcp", hidden: false },
        { name: "想从事互联网相关工作", value: "7X0R", hidden: false },
        { name: "对互联网、电子产品有浓厚兴趣",value: "b6ia",hidden: false },
        { name: "想认识更多兴趣相投的校友",value: "wLN9",hidden: false },
        { name: "我还有其他的原因*", value: "BmjG", hidden: false }
      ],
    };
  },

  components: {},

  methods: {},

  mounted() {}
};
</script>

<style scoped>
.textareaStyle {
  border: 2rpx solid black;
}
.inputBox {
  border-bottom: 2rpx solid black;
  width: 80%;
  margin-bottom: 10rpx;
}
.inputQuestion {
  margin-top: 10rpx;
  font-size: 35rpx;
}
.componentBox {
  margin-bottom: 20rpx;
}
.radio-group {
  font-size: 30rpx;
  margin-top: 20rpx;
  margin-bottom: 10rpx;
}

.radio {
  display: inline-block;
  width: 180rpx;
}
.checkbox-group {
  font-size: 30rpx;
  margin-top: 30rpx;
  margin-bottom: 10rpx;
}
.textareaStyle {
  margin-top: 10rpx;
  border: 1rpx solid gray;
  border-radius: 20rpx;
  font-size: 30rpx;
  padding: 10rpx;
  
}
</style>
