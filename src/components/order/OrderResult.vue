<script setup>
  import { ref } from 'vue'
  import { useOrderStore } from '@/stores/order'
  import { storeToRefs } from 'pinia'

  const store = useOrderStore()
  const { address, total } = storeToRefs(store)

  function doReset() {
    store.reset();
  }
</script>

<template>
  <div class="result">
    <h3>订单信息：</h3>
    <p>{{ address }}</p>
    <p>总金额：{{ total }}</p>

    <button @click="doReset">重置</button>
  </div>
  
</template>

<style>
  .result {
    font-size: 14px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    box-sizing:  border-box;
    box-shadow: 0px 0px 6px rgba(0,0,0, .2);
  }
</style>