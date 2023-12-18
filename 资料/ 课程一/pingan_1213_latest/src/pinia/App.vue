<template>
  <div class="app">
    <Info />
    <Text />
    <List /> 
  </div>
</template>

<script setup >
// import { reactive } from 'vue';
import Info from './components/Info.vue';
import Text from './components/Text.vue';
import List from './components/List.vue';
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