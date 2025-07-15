<script setup>
defineOptions({
  name: 'ClassTable'
})
const weekDayList = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

</script>

<template>
  <table class="table">
    <thead>
    <tr class="header">
      <th class="!bg-transparent"></th>
      <th v-for="item in weekDayList" :key="item">{{ item }}</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="4">上午</td>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>

    <tr class="h-44px"></tr>
    <tr>
      <td rowspan="4">下午</td>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    <tr>
      <td v-for="item in weekDayList" :key="item"></td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 5px; /* 设置单元格间距为10像素 */
  @apply p-10px;
}

thead th {
  @apply font-bold bg-[#BDBDBD];
}

thead th,
thead td {
  padding: 10px;
  text-align: center;
}

tbody td[rowspan="4"] {
  writing-mode: vertical-lr; /* 从左到右的竖直排列 */
  @apply bg-[#BDBDBD] ;
}


tbody td{
  border: 1px solid #BDBDBD;
}
tbody td:not([rowspan="4"]) {
  @apply h-54px;
}
</style>
