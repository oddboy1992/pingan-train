<script setup>
  import { ref } from 'vue'
  import { useOrderStore } from '@/stores/order'

  const store = useOrderStore()
  function input(event) {
    const { target } = event
    console.log(target.value, '>>>>>>')
    
    store.setAddress(target.value)
  }
</script>

<template>
  <div class="address">
    <input 
      class="input2"
      @input="input" 
      type="text" 
      placeholder="请输入地址">
  </div>
</template>

<style>
  .address {
    margin-top: 20px;
    font-size: 12px;
    padding: 20px;
    border-radius: 4px;
    background-color: #BAE0FB;
    box-sizing:  border-box;
    box-shadow: 0px 0px 6px rgba(0,0,0, .2);
  }

  .input2 {
    display: block;
    width: 100%;
    height: 30px;
    border: 1px #ccc solid;
    border-radius: 40px;
    padding-left: 30px;
    font-size: 16px;
    box-sizing:  border-box;
  }
</style>