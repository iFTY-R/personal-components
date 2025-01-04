<script setup>

const lessonList = [
  { label: '语文', color: '#EF5350' },
  { label: '数学', color: '#EC407A' },
  { label: '物理', color: '#AB47BC' },
  { label: '化学', color: '#7E57C2' },
  { label: '生物', color: '#5C6BC0' },
  { label: '历史', color: '#42A5F5' },
  { label: '地理', color: '#29B6F6' },
  { label: '美术', color: '#26C6DA' },
  { label: '音乐', color: '#26A69A' },
  { label: '体育', color: '#66BB6A' },
]

</script>

<template>
<div class="flex flex-col items-center gap-10px py-10px">
  <div
      v-for="item in lessonList"
      :key="item.label"
      :style="{ backgroundColor: item.color }"
      class="px-20px py-10px font-bold cursor-pointer"
  >
    {{ item.label }}
  </div>
</div>
</template>

<style scoped>

</style>
