<template>
  <div class="v-text">
    <span>
      <span class="w-[20px] h-[20px] inline-block mr-[10px]"><Icon name="Airplay" /></span>地址：</span>
    <input :value="props.text"  @input="onInput" />
  </div>
</template>

<script setup >
import Icon from './Icon.vue'
const props = defineProps({
  text: String,
});
const emits = defineEmits(['updateText']);
const onInput = (e) =>  {
  emits('updateText', e.target.value);
}
</script>

<style>
.v-text {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #d6d5d5;
  font-size: 20px;
  color: #222222;
  font-size: 16px;
}
.v-text input {
  width: 200px;
  height: 32px;
  line-height: 32px;
  margin-right: 10px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>