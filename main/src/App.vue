<script setup lang="ts">
  import WujieVue from "wujie-vue3";
  const { bus } = WujieVue;

  bus.$on('Vue3', (data: any) => {
    console.log(data, '我是主应用')
  })
</script>

<template>
  <h1>这是主应用</h1>
  <router-link to="vue3">vue3</router-link>
  <router-link style="margin-left: 10px;" to="react">react</router-link>

  <router-view></router-view>
</template>

<style scoped>

</style>
