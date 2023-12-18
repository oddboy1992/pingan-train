<template>
  <div class="v-info">
    <div>订单信息：</div>
    <div>{{myStore.text}}</div>
    <div>总金额：{{myStore.totalPrice}}</div>
    <button @click="reset">重置</button>
    <button @click="changeText">修改信息</button>
  </div>
</template>

<script setup>
import { useMyStore } from '../store';
const myStore = useMyStore();

function reset () {
  myStore.$reset()
}

import {
  storeToRefs
} from 'pinia';

let {
  text
} = storeToRefs(myStore);

function changeText () {
  text.value = '你好啊，苏州'
}
</script>

<style>
.v-info {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 0px 16px 0px #00000038;
  border: 1px solid #d6d5d5;
  font-size: 20px;
  color: #222222;
  background: #ffffff;
  font-size: 18px;    
  text-align: left;
  line-height: 1.5;
}
.v-info-value {
  font-size: 24px;
  font-weight: 800;
  color: #fe3030;
}
</style>