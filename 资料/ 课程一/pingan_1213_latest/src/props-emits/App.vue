<template>
  <div class="app">
    <info :text="state.text"  :list="state.list" />
    <v-text :text="state.text" @updateText="updateText" /> 
    <list
      :list="state.list" 
      @increase="increase"
      @decrease="decrease"
    />
  </div>
</template>

<script setup >
import Info from './components/Info.vue';
import VText from './components/Text.vue';
import List from './components/List.vue';

import { reactive } from 'vue';
const state = reactive({
  text: '中国平安',
  list: [
    { name: '短期意外险', price: 5, count: 0 },
    { name: '境外留学险', price: 8, count: 0 },
    { name: '意外伤害险', price: 10, count: 0 },
  ]
});
const updateText = (text) => {
  state.text = text;
}
const increase = (index) => {
  state.list[index].count += 1;
}
const decrease = (index) => {
  if (state.list[index].count > 0) {
    state.list[index].count -= 1;
  }
}
</script>

<style>
.app {
  width: 600px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
</style>