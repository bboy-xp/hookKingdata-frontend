<template>
  <div>
    <span>{{inputQuestion}}</span>
    <input class="inputBox" type="text" value="123123">
  </div>
</template>

<script>
export default {
  props: ['inputQuestion']
}
</script>

<style>
.inputBox {
  border: 1px solid balck;
}
</style>
