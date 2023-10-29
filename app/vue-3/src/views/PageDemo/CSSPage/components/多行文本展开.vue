<!--
多行文本展开（多行文本省略、浮动、复选框）

需求：
1. 文本内容 多：显示 [按钮] 和 [省略号]
2. 文本内容 少：不显示 [按钮] 和 [省略号]
3. 默认 三行省略，支持 自定义行数

准备 基本结构样式
控制 多行文本省略
控制 按钮切换（基于 checkbox）
控制 浮动 到右下角（清除浮动）
基于选中状态，控制多行行数，完成展开
优化内容少的情况


多行文本省略、复选框控制状态、浮动&清除浮动技巧

-->
<script setup>
defineOptions({
  name: 'MultilineTextExpansionDemo1',
})
</script>

<template>
  <div class="wrapper">
    <!--将来需要隐藏的复选框（用于切换）-->
    <input type="checkbox" id="exp1" class="exp">

    <!-- 核心文本区域 -->
    <div class="text">
      <label for="exp1" class="btn" text-0="收起" text-1="展开"></label>

      令人脱发的代码说: css是前端学习的一个基础内容，也是相对具有趣味性的一部分，希望你能从中感受到编程的乐趣，获得一定收获。作品源码都在粉丝群里，欢迎加群分享交流技术。想免费学习的小白也欢迎私信我学习中的问题。

      <!--作品源码都在粉丝群里，欢迎加群分享交流技术。想免费学习的小白也欢迎私信我学习中的问题。-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
  @apply mx-auto flex overflow-hidden my-50px w-400px rounded-8px p-15px;

  .exp {
    @apply hidden;
  }

  // 多行文本溢出
  .text {
    // 两端对齐 text-justify
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    display: -webkit-box;
    // 三行省略
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @apply text-20px relative;

    //  用于将 按钮挤到下面去
    &::before {
      content: '';
      @apply h-[calc(100%-24px)] float-right;
    }

    // 测试优化，文本少的情况，用于覆盖掉 按钮
    &::after {
      content: '';
      // 这一行比较深奥，虽然不懂，但是打手震撼
      box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
      @apply w-999vw h-999vw absolute -ml-100px;
    }
  }

  .btn {
    @apply ml-10px text-16px px-8px bg-[#3F51B5] leading-24px rounded-4px text-#fff cursor-pointer float-right clear-both;

    &::before {
      content: attr(text-1);
    }
  }

  // 实现按钮切换
  .exp:checked + .text .btn::before {
    content: attr(text-0);
  }

  // 基于选中状态，控制展开行数
  .exp:checked + .text {
    -webkit-line-clamp: 999;
  }

  //
  .exp:checked + .text::after {
    visibility: hidden;
  }
}
</style>
