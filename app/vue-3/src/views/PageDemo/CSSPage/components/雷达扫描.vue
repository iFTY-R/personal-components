<!--
雷达扫描（动画、线性渐变、径向渐变、圆角、动画延迟）

雷达基本网络
扫描效果
外散波纹效果
添加头像美化


线性渐变 & 径向渐变 实现 雷达网络
线性渐变 & 圆角 实现 扫描的光
动画延迟，配合实现动效

-->
<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'DemoDemo',
})

const userList = ref([
  { avatar: '', style: '--i: 0.5; --l: 50px; --t: -130px; --d: 0.05;' },
  { avatar: '', style: '--i: 0.6; --l: 130px; --t: 50px; --d: 0.28;' },
  { avatar: '', style: '--i: 0.9; --l: 50px; --t: 50px; --d: 0.36;' },
  { avatar: '', style: '--i: 0.7; --l: -50px; --t: 90px; --d: 0.55;' },
  { avatar: '', style: '--i: 0.7; --l: -80px; --t: -50px; --d: 0.80;' },
])
</script>

<template>
  <div class="body">
    <div class="radar">
      <img class="avatar" src="" alt="">
      <img
          v-for="(item,i) in userList"
          :key="i"
          :src="item.avatar"
          :style="item.style"
          class="girl"
          alt=""
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  @apply m-0 flex items-center justify-center overflow-hidden bg-black h-100vh;

  .radar {

    background: linear-gradient(
            90deg,
            transparent 49.75%,
            #43768e 49.75%,
            #43768e 50.25%,
            transparent 50.25%
    ), linear-gradient(
            transparent 49.75%,
            #43768e 49.75%,
            #43768e 50.25%,
            transparent 50.25%
    ),
    repeating-radial-gradient(
            transparent 0,
            transparent 27px,
            #43768e 27px,
            #43768e 30px
    );
    @apply relative w-500px h-500px rounded-1/2;

    &::before {
      content: '';
      background: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0) 50%,
              rgba(107, 183, 208, 1) 100%
      );
      border-radius: 100% 0 0 0;

      animation: scanning 5s infinite linear;
      transform-origin: right bottom;

      @apply absolute w-250px h-250px;
    }

    &::after {
      content: '';
      transform: translate(-50%, -50%);

      animation: scale 5s ease-in infinite;

      @apply w-0 h-0 opacity-50 absolute left-1/2 top-1/2 rounded-1/2 bg-[rgba(107,183,208,1)];
    }

    .avatar {
      transform: translate(-50%, -50%);
      @apply absolute top-1/2 left-1/2 border-2 border-solid border-white w-70px h-70px rounded-1/2 z-666;
    }

    .girl {
      transform: translate(-50%, -50%) scale(var(--i));
      transform-origin: center;

      animation: upDown 5s infinite linear;
      animation-delay: calc(var(--d) * 5s);

      @apply
      absolute left-[calc(50%+var(--l))]
      top-[calc(50%+var(--t))]
      w-50px h-50px rounded-1/2 object-cover border-2 border-solid border-[#ff2972]
      z-999;
    }
  }
}

@keyframes scanning {
  to {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  60%, 100% {
    @apply opacity-0 w-800px h-800px;
  }
}

@keyframes upDown {
  20% {
    transform: translate(-50%, -50%) scale(calc(var(--i) * 1.4));
    box-shadow: 0 0 10px #ff2972, 0 0 30px #ff2972, 0 0 50px #ff2972;
  }

  50%, 100% {
    transform: translate(-50%, -50%) scale(var(--i));
    box-shadow: none;
  }
}
</style>
