import { reactive } from 'vue';

export const store = reactive({
  text: '中国平安',
  list: [
    { name: '短期意外险', price: 5, count: 0 },
    { name: '境外留学险', price: 8, count: 0 },
    { name: '意外伤害险', price: 10, count: 0 },
  ]
});