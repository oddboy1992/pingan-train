<script setup>
import { ref, computed } from 'vue'

	// 定义
  const form = ref({
    phone: '',
    password: '',
  })
  
	//计算属性
  const disabled = computed(() => {
    const { phone, password } = form.value;
    return !phone || !password
  })
</script>

<template>
  <div class="login-container">
      <h2>Login</h2>
    
      <input v-model="form.phone" class="input" type="text" name="手机号" placeholder="手机号" required>
      <input v-model="form.password"  class="input" type="password" name="密码" placeholder="密码" required>

      <button 
        :class="[disabled ? 'disabled' : '']"
        class="input submit">立即登录</button>
  </div>
  
</template>

<style>
  body {
    background: #F4F5F8;
  }
  .login-container {
    width: 530px;
    padding: 70px;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    margin-top: 60px;
    box-sizing:  border-box;
    box-shadow: 0px 0px 6px rgba(0,0,0, .2);
    
    .input {
      display: block;
      width: 100%;
      height: 50px;
      border: 1px #ccc solid;
      border-radius: 50px;
      padding-left: 30px;
      margin-top: 20px;
      font-size: 16px;
      box-sizing:  border-box;
    }
    .input::placeholder {
      color: #ccc;
    }
    
    .submit {
      background: #ed5149;
      color: #fff;
    }
    
    .disabled {
      opacity: 0.5;
    }
  }
</style>