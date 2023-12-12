<script setup lang="ts">
  import type { Item } from '@/interface/order';

  const props = defineProps<{
    item: Item
  }>()

  const emit = defineEmits<{
    (e: 'add', number: number): void;
    (e: 'reduce', value: number): void;
  }>()

  function addHandlerEvent() {
    const { number } =  props.item
    emit('add', number + 1)
  }

  function reduceHandlerEvent() {
    const { number } =  props.item

    if (number === 0) return
    emit('reduce', number - 1)
  }
</script>

<template>
  <div class="order-item">
    <div class="name">{{ item.name }}</div>

    <div class="other">
      <div class="price">单价：{{ item.price }}</div>
      <div class="number">
        <span 
          :class="{'disabled': item.number == 0}"
          @click="reduceHandlerEvent" class="btn"> - </span>
        <span class="value">{{ item.number }}</span>
        <span @click="addHandlerEvent" class="btn"> + </span>
      </div>
    </div>
  </div>
  
</template>

<style>
  .order-item {
    display: flex;
    align-items: center;
  }

  .name {
    width: 200px;
  }

  .other {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .price {
    width: 130px;
  }

  .number {
    flex: 1;
  }

  .btn {
    width: 60px;
    line-height: 60px;
    font-weight: bold;
    cursor: pointer;
  }

  .disabled {
    cursor: not-allowed;
    color: red;
  }
</style>