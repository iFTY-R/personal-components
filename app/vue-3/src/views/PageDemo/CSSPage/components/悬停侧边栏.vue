<!--
悬停侧边栏（定位、hover、圆角、透明度）


-->
<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'DemoDemo',
})

const urlData = ref([
  { url: '#', icon: '', title: '首页' },
  { url: '#', icon: '', title: '产品管理' },
  { url: '#', icon: '', title: '会员管理' },
  { url: '#', icon: '', title: '订单管理' },
  { url: '#', icon: '', title: '财务中心' },
  { url: '#', icon: '', title: '消息' },
  { url: '#', icon: '', title: '系统配置' },
  { url: '#', icon: '', title: '用户中心' },
]);
</script>

<template>
  <div class="body">
    <ul>
      <li v-for="(item,i) in urlData" :key="item.title">
        <a :href="item.url">
          <i :class="item.icon">{{ i }}</i>
          <span>{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.body {
  @apply flex items-center justify-center h-100vh;

  ul {
    box-shadow: 0 10px 50px rgba(6, 5, 58, 0.25);
    @apply list-none flex flex-col justify-between bg-[#231f2e] h-580px py-20px px-12px rounded-10px;

    li:nth-child(6) {
      @apply mt-80px pt-20px border-t-1 border-solid border-[rgba(255,255,255,0.15)];
    }

    a {
      @apply relative flex items-center justify-center text-white decoration-0 w-48px h-48px rounded-8px;

      i {
        @apply bg-white h-20px w-20px text-black not-italic text-center;
      }

      span {
        transform-origin: center left;
        transition: 0.15s ease;
        @apply absolute left-[calc(100%+24px)] bg-[#fa5c51] whitespace-nowrap py-8px px-16px rounded-6px opacity-0;

        &::before {
          content: '';
          transform: translateY(-50%) rotate(45deg);
          @apply w-12px h-12px bg-[#fa5c51] absolute -left-5px top-1/2 rounded-3px;
        }
      }

      &:hover,
      &:focus,
      &:active {
        @apply bg-[#fa5c51] outline-0;
      }

      &:hover span,
      &:focus span,
      &:active span {
        transform: scale(1);
        @apply opacity-100;
      }
    }
  }
}
</style>
