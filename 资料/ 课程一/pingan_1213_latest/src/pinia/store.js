

import { defineStore } from 'pinia';

export const useMyStore = defineStore('my-store', {
  state: () => {
    return {
      text: '中国平安',
      list: [
        { name: '短期意外险', price: 5, count: 0 },
        { name: '境外留学险', price: 8, count: 0 },
        { name: '意外伤害险', price: 10, count: 0 },
      ]
    }
  },

  getters: {
    totalPrice(state) {
      let total = 0;
      state.list.forEach((item) => {
        total += item.price * item.count;
      });
      return total;
    },
  },

  actions: {

    updateText(text) {
      this.text = text;
    },

    increase(index) {
      this.list[index].count += 1;
    },

    decrease(index) {
      if (this.list[index].count > 0) {
        this.list[index].count -= 1;
      }
    }
    
  }

})
 