<script setup>
import ClassTable from '@/views/PageDemo/components/DragTheClassSchedule/ClassTable.vue';
import ClassList from '@/views/PageDemo/components/DragTheClassSchedule/ClassList.vue';

defineOptions({
  name: 'DragTheClassSchedule'
})

</script>

<template>
  <div class="w-1920px">
    <div class="py-30px text-30px font-bold text-black text-center">课程表</div>
    <div class="flex gap-15px">
      <div class="bg-gray-100 w-100px ">
        <ClassList />
      </div>
      <div class="bg-gray-100 w-900px">
        <ClassTable />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
