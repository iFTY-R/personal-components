<!--
密码灯登录（密码框 type 切换、阴影、旋转）

登录结构
登录样式
小眼睛 和灯光
body 加上类名，统一控制关灯样式
动态切换类名

密码框 type 与 text 和 password 切换
类名统一 控制样式，动态切换
-->
<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'DemoDemo',
})

const isShowPwd = ref(false);
</script>

<template>
  <div class="body" :class="{'show-pass':isShowPwd}">
    <div class="container">
      <h1>登录</h1>

      <div class="inp-box">
        <input type="text" placeholder="账号">
      </div>

      <div class="inp-box">
        <input :type="isShowPwd ? 'text' : 'password'" placeholder="密码">
        <i class="eye iconfont icon-nosee" @click="isShowPwd=!isShowPwd"></i>
        <div class="light"></div>
      </div>

      <button class="btn-login">登录</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
//@import "https://at.alicdn.com/t/c/font_4179360_0trgibeg4zp.css";

.body {
  @apply h-100vh flex justify-center items-center bg-[#fefefe] overflow-hidden;

  &::before,
  &::after {
    content: '';
    @apply absolute z-0 rounded-1/2 bg-[#42adf5] filter blur-2px;
  }

  &::before {
    @apply w-30vh h-30vh -left-10vh top-10vh;
  }

  &::after {
    @apply w-60vh h-60vh -right-25vh -bottom-25vh;
  }

  &.show-pass {
    @apply bg-black;

    &::before,
    &::after {
      @apply opacity-0;
    }
  }
}

.container {
  box-shadow: 0 8px 60px rgba(0, 0, 0, 0.08);
  @apply w-500px h-450px bg-white rounded-10px flex flex-col justify-center items-center relative z-1;

  h1 {
    @apply w-3/4 text-40px tracking-10px mb-30px;
  }

  .inp-box {
    @apply w-3/4 my-10px rounded-5px relative;

    input {
      @apply w-full text-16px p-15px border border-solid border-[#e3e3e3] rounded-5px outline-0 bg-transparent relative z-2 ;
    }

    .eye {
      transform: translateY(-50%);
      @apply absolute top-1/2 right-15px z-3 cursor-pointer not-italic ;

      &::before {
        content: 'a';
      }
    }

    .light {
      clip-path: polygon(100% 50%, 100% 50%, 0 0, 0 100%);
      transform: translateY(-50%) rotate(var(--deg, 0));
      transform-origin: right center;
      transition: transform .2s ease-out;
      @apply w-100vw h-25vw absolute z-1 top-1/2 right-30px;
    }
  }

  .btn-login {
    @apply w-3/4 h-50px mt-30px border-none outline-0 bg-[#4e6ef2] text-white rounded-5px text-18px tracking-8px indent-8px cursor-pointer;
  }
}

.show-pass {
  .container {
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 50px rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  h1 {
    @apply text-white;
  }

  input {
    border: 1px solid #000;
    @apply text-white;
  }

  #pass {
    @apply text-black;
  }

  .eye {
    @apply text-white;
  }

  .btn-login {
    @apply bg-white text-black;
  }

  .light {
    @apply bg-yellow-300;
  }
}
</style>
