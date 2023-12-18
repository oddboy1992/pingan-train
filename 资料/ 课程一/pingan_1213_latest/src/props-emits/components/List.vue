<template>
  <div class="v-list">
    <div class="v-list-item"
     :key="index"
     v-for="(item, index) in list">
      <span class="text">{{item.name}}</span>
      <span class="text">单价: {{item.price}}</span>
      <button class="btn" @click="onClickDecrease(index)">-</button>
      <span class="count"> {{item.count}}</span>
      <button class="btn" @click="onClickIncrease(index)">+</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Array,
})
const emits = defineEmits(['increase', 'decrease'])
const  onClickIncrease = (index) => {
  emits('increase', index)
}
const  onClickDecrease = (index) => {
  emits('decrease', index)
}
</script>

<style>
.v-list {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  font-size: 20px;
  color: #222222;
  font-size: 16px;
}
.v-list .v-list-item {
  border-bottom: 1px solid red;
  line-height: 32px;
  padding: 4px 0;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-list .v-list-item .text {
  width: 120px;
  display: inline-block;
  text-align: center;
}
.v-list .v-list-item .count {
  min-width: 50px;
  display: inline-block;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: red;
}
.v-list .v-list-item .btn {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 30px;
  cursor: pointer;
  box-sizing: border-box;
}
</style>