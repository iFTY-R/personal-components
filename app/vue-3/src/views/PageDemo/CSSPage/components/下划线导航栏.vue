<!--
准备 整体导航结构
准备 整体导航样式
添加 修饰性下划线
JS 辅助切换 active 类
添加 切换时，线的状态



元素定位
active 类名切换，控制位移
transition 过渡动画
-->
<script setup>
import { computed, ref } from 'vue';

defineOptions({
  name: 'NavBarDemo1'
})

const currentIndex = ref(0);
const handleClick = (i) => {
  currentIndex.value = i;
}
const colors = ref(['#f00', '#0f0', '#00f'])
const currentColor = computed(() => colors.value[currentIndex.value])
</script>

<template>
  <div>
    <ul class="mx-auto nav w-450px h-40px leading-40px my-50px">
      <li
          :class="{active: currentIndex === 0}"
          @click="handleClick(0)">
        <a href="#">首页特价</a>
      </li>
      <li :class="{active: currentIndex === 1}" @click="handleClick(1)"><a href="#">商城甩卖</a></li>
      <li :class="{active: currentIndex === 2}" @click="handleClick(2)"><a href="#">个人中心</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.nav {
  @apply relative flex;

  li {
    @apply flex-1 text-center;
  }

  a {
    transition: all .5s;
    @apply no-underline text-[#ccc] text-20px;
  }

  .active a {
    @apply text-[#666];
  }

  &::after {
    content: '';
    transition: all .5s;
    transform: translateX(calc(v-bind(currentIndex) * 150px));
    background-color: v-bind(currentColor);
    @apply absolute left-[30px] bottom-0px h-2px w-90px;
  }
}
</style>
