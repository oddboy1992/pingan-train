import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
  const address = ref('')
  const total = ref(0)
  
  function reset() {
    address.value = '重置'
    total.value = 100
  }

  function setAddress(value: any) {
    address.value = value
  }

  function setTotal(value: any) {
    total.value = value
  }

  return { address, total, reset, setAddress, setTotal }
})
