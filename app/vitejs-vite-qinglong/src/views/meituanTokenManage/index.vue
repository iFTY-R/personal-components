<script setup>

  import TokenTable from '@/views/meituanTokenManage/TokenTable.vue';
  import ConfigManagement from '@/views/meituanTokenManage/ConfigManagement/index.vue';

</script>

<template>
  <div class="">
    <div class="w-1000px m-auto">
      <div v-if="$route.query.config" class="pt-10">
        <ConfigManagement />
      </div>
      <div class="pt-10">
        <TokenTable />
      </div>
    </div>
  </div>
</template>
