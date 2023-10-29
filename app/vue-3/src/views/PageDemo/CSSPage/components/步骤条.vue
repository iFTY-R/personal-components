<!--
准备 步骤条基本机构
准备 整体样式
实现 序号自定义
实现 引导线
基于 active ，控制高亮
测试调优



Flex 布局自适应
CSS 计数器
-->
<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: 'StepBarDemo1',
})

const infoList = ref(['注册', '域认证', '身份校验', '开通账号'])
const currentIndex = ref(0);
const handleClick = (i) => {
  currentIndex.value = i;
}
</script>

<template>
  <div>
    <!--已完成 进行中 未完成-->
    <ol class="steps">
      <li
          v-for="(item,i) in infoList" :key="item"
          :class="{active: currentIndex === i}"
          @click="handleClick(i)"
      >{{ item }}</li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
.steps {
  --normal-color: #666;
  --active-color: #06e;

  // 重置计数器
  counter-reset: order;
  @apply flex list-none justify-between p-0 mx-10px my-20px;

  li {
    // 开启计数器
    counter-increment: order;
    // 设置 已完成的颜色
    color: var(--active-color);

    // 设置 编号
    &::before {
      // 使用计数器内容
      content: counter(order);
      @apply inline-block flex-shrink-0 border-solid border-current text-center w-1.4em leading-1.4em mr-0.5em rounded-[50%] border-1;
    }

    // 等分宽度
    @apply flex flex-auto items-center;

    &:last-child{
      // 最后一个不需要等分宽度
      @apply flex-none;
    }

    // 设置步骤横线，最后一个不需要设置
    &:not(:last-child)::after {
      content: '';
      @apply flex-1 border-b border-current border-solid opacity-60 mx-1em;
    }

    // 设置激活的 编号样式
    &.active::before {
      color: #fff;
      background-color: var(--active-color);
      border-color: var(--active-color);
    }

    // 设置未激活的 横线样式
    &.active::after,
    &.active ~ li {
      color: var(--normal-color);
    }
  }
}
</style>
