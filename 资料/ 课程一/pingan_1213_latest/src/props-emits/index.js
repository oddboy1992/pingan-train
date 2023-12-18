import { createApp } from 'vue';
import App from './App.vue';
import './index.css'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.mount('#app');
})