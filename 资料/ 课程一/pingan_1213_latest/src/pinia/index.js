import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// document.addEventListener('DOMContentLoaded', () => {
//   const app = createApp(App);
//   const pinia = createPinia();
//   app.use(pinia);
//   app.mount('#app');
// })

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount('#app')