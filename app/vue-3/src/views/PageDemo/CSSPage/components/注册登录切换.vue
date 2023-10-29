<!--
准备 几百本结构 加载（全屏容器 + 登录 + 注册）
细化登录 和 注册 的结构样式 （两个叠在一起）
设置另半边 叠加层 结构样式（定位，溢出隐藏）
设计类名 切换 状态，JS 控制切换类名

登录注册定位层叠在一起，切换时，过渡动画 => 修改位置 + 层级 + 透明度
点击按钮，移动叠加层盒子的位置（定位位移）
统一将所有变动，归置成一个类名控制，切换类名统一实现切换

-->
<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'DemoDemo',
})

const panelActive = ref(false);

</script>

<template>
  <div class="body">
    <div class="container" :class="{'panel-active':panelActive}">
      <!--注册-->
      <div class="formbox register">
        <form class="form" id="form1">
          <h2 class="title">注册</h2>
          <input type="text" placeholder="用户名" class="input">
          <input type="email" placeholder="邮箱" class="input">
          <input type="password" placeholder="密码" class="input">
          <button class="btn">注册</button>
        </form>
      </div>
      <!--登录-->
      <div class="formbox login">
        <form class="form" id="form2">
          <h2 class="title">登录</h2>
          <input type="email" placeholder="邮箱" class="input">
          <input type="password" placeholder="密码" class="input">
          <a href="#" class="link">忘记密码？</a>
          <button class="btn">登录</button>
        </form>
      </div>
      <!--浮层-->
      <div class="overlay-box">
        <div class="overlay">
          <div class="panel over-left">
            <button class="btn" id="signIn" @click="panelActive = false">已有账号？立即登录</button>
          </div>
          <div class="panel over-right">
            <button class="btn" id="signUp" @click="panelActive = true">无账号？前往注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  @apply flex overflow-hidden bg-blue-200 w-100vw h-100vh;

  .container {
    @apply w-full max-w-758px h-420px relative m-auto bg-[rgba(255,255,255,0.3)];

    .formbox {
      transition: all 0.6s ease-in-out;
      @apply absolute top-0 h-full;

      &.login {
        @apply left-0 w-[50%] z-2;
      }

      &.register {
        @apply left-0 opacity-0 w-[50%] z-1;
      }

      .form {
        @apply bg-[#e9e9e9] flex items-center justify-center flex-col px-3rem h-full text-center;

        .title {
          @apply font-[300] mb-1.25rem;
        }

        .input {
          @apply bg-white border-none p-0.9rem my-0.5rem w-full;
        }

        .link {
          @apply color-[#333] text-16px my-1.5rem no-underline;
        }

        .btn {
          @apply mt-1.5rem;
        }
      }
    }


    .btn {
      transition: transform 80ms ease-in;
      @apply bg-[#095c91] bg-gradient-to-r from-[#095c91] to-[#0393a3] rounded-5px border-none text-[#e9e9e9]
      cursor-pointer text-0.8rem font-bold tracking-0.1rem py-0.9rem px-4rem
      uppercase;
    }

    .btn:active {
      transform: scale(0.95);
    }

    .overlay-box {
      transition: transform 0.6s ease-in-out;
      @apply h-full absolute left-1/2 overflow-hidden top-0 w-1/2 z-100;

      .overlay {
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        @apply bg-[rgba(255,255,255,0.25)] h-full relative -left-[100%] w-[200%];

        .panel {
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
          @apply w-1/2 h-full flex items-center flex-col justify-center absolute text-center top-0;
        }

        .over-left {
          transform: translateX(-20%);
        }

        .over-right {
          right: 0;
          transform: translateX(0);
        }
      }
    }
  }

  .panel-active {
    .login {
      transform: translateX(100%);
    }

    .register {
      transform: translateX(100%);
      opacity: 1 !important;
      z-index: 3 !important;
    }

    .overlay-box {
      transform: translateX(-100%);

      .overlay {
        transform: translateX(50%);

        .over-left {
          transform: translateX(0);
        }

        .over-right {
          transform: translateX(20%);
        }
      }
    }


  }
}
</style>
