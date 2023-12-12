<script setup lang="ts">
  import { ref } from 'vue'
  import OrderResult from '@/components/order/OrderResult.vue'
  import OrderItem from '@/components/order/OrderItem.vue'
  import OrderAddress from '@/components/order/OrderAddress.vue'
  import { useOrderStore } from '@/stores/order'
  import type { Item } from '@/interface/order'

	// 定义
  const items = ref(initItems())
  // store
  const store = useOrderStore()
  function initItems() {
    return [
      { name: '短期意外险', price: 5000, number: 0 },
      { name: '境外意外险', price: 8000, number: 0 },
      { name: '意外伤害险', price: 10000, number: 0 },
    ]
  }
  
  function calcPrice() {
    let total = 0
    items.value.forEach((item: any) => {
      const { price, number } = item
      total +=  price * number
    });

    store.setTotal(total)
  }

  // add
  function add(num: number, item: Item) {
    item.number = num; 
    calcPrice()
  }

  // reduce
  function reduce(num: number, item: Item) {
    item.number = num; 
    calcPrice()
  }
</script>

<template>
  <div class="order">
    <OrderResult></OrderResult>
    <OrderAddress></OrderAddress>

    <div class="order-wrapper">
      <OrderItem 
        :key="index"
        v-for="(item, index) in items"
        :item="item"
        @add="(number) => { add(number, item) }"
        @reduce="(number) => { reduce(number, item) }">
      </OrderItem>
    </div>
  </div>
</template>

<style>
  .order-wrapper {
    margin-top: 20px;
    font-size: 14px;
    padding: 20px;
    border-radius: 4px;
    background-color: #BAE0FB;
    box-sizing:  border-box;
    box-shadow: 0px 0px 6px rgba(0,0,0, .2);
  }
</style>